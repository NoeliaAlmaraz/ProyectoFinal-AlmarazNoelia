import React,{useId} from 'react'
import CartWidget from './CartWidget/CartWidget';
import { useAppContext } from '../Context/Context.jsx';
import './CartWidgetContainer.css'



function CartWidgetContainer(){
    const {clearCart,cart,addOrdersToFirestore} = useAppContext();
    const cartCheckboxId =useId();


    // Función para calcular el precio total
    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => {
            const quantity = item.quantity || 0;
            const wantToReadCount = item.want_to_read_count || 0;
            const itemPrice = (wantToReadCount / 10).toFixed(2);
            return total + (itemPrice * quantity);
        }, 0).toFixed(2);
    };

    const totalPrice = calculateTotalPrice();

    // Función para calcular el total de cantidades
    const calculateTotalQuantity = () => {
            return cart.reduce((total, item) => {
                return total + (item.quantity || 0);
            }, 0);
    };
    
        const totalQuantity = calculateTotalQuantity();


    return (
        <div>
            


        <label className='cart-button' htmlFor={cartCheckboxId}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/>
            </svg>
            <span>
                <p>{totalQuantity}</p>
            </span>

        </label>
        <input type="checkbox" id={cartCheckboxId} hidden />

        <aside className='cart-container'>
            <header className='cart-container-header'>
                <button className='button-clear-cart' onClick={clearCart}>Vaciar carro</button>
            </header>


                <CartWidget />

            <footer className='cart-container-footer'>
             <button className='button-confirm-order' onClick={addOrdersToFirestore}>Confirmar pedido</button>
                <p>Total:  {totalPrice}  $</p>
            </footer>
        </aside>

    </div>

    );

}

export default CartWidgetContainer;