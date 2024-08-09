import React from 'react'
import './Cart.css'
import { useAppContext } from '../../Context/Context.jsx';




function Cart({title, author_name,cover,index,price,quantity}) {

  const {removeItemFromCart,handleChangeQuantity,numbers } = useAppContext();
  const realPrice =(price/10).toFixed(2) ;
  const totalPrice =(realPrice * quantity).toFixed(2) ;






  return ( 
    
      <article key={index} className='card-item-cart'>
        <img src={`https://covers.openlibrary.org/b/id/${cover}-M.jpg`} alt={`Cover of ${title}`}></img>
        <div className='card-item-cart-info'>
            <h2>{title}</h2>
            <p >{author_name}</p>
            <p>{realPrice}$</p>
            <div>
              <p>Cantidad: {quantity}</p>
              <div className='quantity-select'>
                <select className='quantity-select-input' value={quantity} onChange={(e) => handleChangeQuantity(index, e)}>
                  {numbers.map(number => (
                    <option key={number} value={number}>{number}</option>
                  ))}
                </select>
                <button className='button-remove-item' onClick={() => removeItemFromCart(index)}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                  </svg>
                </button>
              </div>
              <p>Total: {totalPrice} $</p>
            </div>
        </div>
      </article>
   
)
}
export default Cart


