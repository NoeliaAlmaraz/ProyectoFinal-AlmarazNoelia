
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NavBar/NotFound/NotFound';
import { ContextProvider, useAppContext } from './components/Context/Context.jsx';
import Contact from './components/NavBar/Contact/Contact';
import Home from './components/NavBar/Home/Home';
import ItemListDetailContainer from './components/ItemListContainer/ItemListDetailContainer/ItemListDetailContainer';
import Orders from './components/NavBar/Orders/Orders';


function App() {

  return ( 
      <BrowserRouter>
        <ContextProvider>
          <NavBar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Inicio" element={<Home/>} />
          <Route path="/Producto"  element={<ItemListContainer  />} />
          <Route path="/Contacto"  element={<Contact />} />
          <Route path='/DetalleProducto/:id' element={ <ItemListDetailContainer  />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="*" element={<NotFound/>} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
  );

}

export default App
