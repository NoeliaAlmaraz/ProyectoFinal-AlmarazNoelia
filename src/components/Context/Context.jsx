import React, { createContext, useContext, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, addDoc, doc, setDoc } from "firebase/firestore";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



const Context = createContext();

const useAppContext = () => useContext(Context);

const firebaseConfig = {

 apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const librosCollection = collection(db, "Libros");
const ordersCollection = collection(db, "Compras");

const ContextProvider = ({ children }) => {
  const [item, setItem] = useState([]);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);

  // Array para generar los números del carrito
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  const MySwal = withReactContent(Swal)

  // Función para obtener los libros de Firestore
  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const librosSnapshot = await getDocs(librosCollection);
        const dataBook = librosSnapshot.docs.map(doc => doc.data());
        setItem(dataBook);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Función para obtener los pedidos de Firestore
  const fetchOrders = async () => {
    try {
      const ordersSnapshot = await getDocs(ordersCollection);
      const ordersWithBooks = [];

      for (const orderDoc of ordersSnapshot.docs) {
        const orderData = {
          id: orderDoc.id,
          ...orderDoc.data()
        };

        const orderBooksCollection = collection(doc(db, 'Compras', orderDoc.id), 'Libros');
        const booksSnapshot = await getDocs(orderBooksCollection);

        const books = booksSnapshot.docs.map(bookDoc => ({
          id: bookDoc.id,
          ...bookDoc.data()
        }));

        ordersWithBooks.push({
          ...orderData,
          books 
        });
      }

      setOrder(ordersWithBooks);
    } catch (error) {
      console.error("Error fetching orders: ", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Restaurar carrito desde localStorage cuando se monta el componente
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Función para agregar un pedido a Firestore
  const addOrdersToFirestore = async () => {
    if (cart.length === 0) {
      MySwal.fire({
        title: 'Carro vacío',
        text: 'El carro está vacío. Añada algún producto antes de confirmar el pedido.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return; 
    }

    try {
      const now = new Date();
      const formattedDate = now.toISOString();
      const newOrderRef = doc(ordersCollection, formattedDate);

      await setDoc(newOrderRef, { createdAt: now });

      const orderBooksCollection = collection(newOrderRef, 'Libros');

      for (const book of cart) {
        await addDoc(orderBooksCollection, book);
      }

      console.log('Books added successfully!');
      clearCart(); 
      MySwal.fire({
        title: 'Pedido confirmado!',
        text: `Su pedido con ID ${newOrderRef.id} ha sido confirmado y añadido a Firestore.`,
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } catch (e) {
      console.error("Error adding documents: ", e);
      MySwal.fire({
        title: 'Error',
        text: 'Hubo un error al confirmar su pedido.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  // Función para agregar un producto al carrito desde el producto
  function addToCart(index,quantity) {
    const itemIndex = item[index];
    const itemInCart = cart.find(item => item.title === itemIndex.title);

    if (itemInCart) {
      const newCart = cart.map(cartItem =>
        cartItem.title === itemIndex.title
          ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
          : cartItem
      );
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart)); 
    } else {
      const newItem = { ...itemIndex, quantity: 1 };
      const newCart = [...cart, newItem]; 
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart)); 
    }
  }

// Función para agregar un producto al carrito desde el detalle de producto 
  function addToCartDetail(index, quantity) {
    const itemIndex = item[index];
    const itemInCart = cart.find(cartItem => cartItem.id === itemIndex.id);
  
    if (itemInCart) {
      const newCart = cart.map(cartItem =>
        cartItem.id === itemIndex.id
          ? { ...cartItem, quantity: (cartItem.quantity || 0) + quantity }
          : cartItem
      );
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    } else {
      const newItem = { ...itemIndex, quantity };
      const newCart = [...cart, newItem];
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }

  }


  // Función para actualizar el número de productos en el carrito
  const handleChangeQuantity = (index, event) => {
    const newCart = cart.map((cartItem, i) =>
      i === index ? { ...cartItem, quantity: parseInt(event.target.value) } : cartItem
    );
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart)); 
  };

  // Función para quitar un producto del carrito
  const removeItemFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  // Función para limpiar el carrito
  function clearCart() {
    setCart([]);
    localStorage.removeItem('cart');
  }

  return (
    <Context.Provider value={{ item, setItem, cart, addToCart, handleChangeQuantity,addToCartDetail, numbers, removeItemFromCart, fetchOrders, order, clearCart, addOrdersToFirestore }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, useAppContext };