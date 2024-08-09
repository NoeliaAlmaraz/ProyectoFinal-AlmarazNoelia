

import React from 'react'
import { useAppContext } from '../../Context/Context';
import Cart from '../Cart/Cart'
import './CartWidget.css'







function CartWidget({} ) {

  const { cart } = useAppContext();
  



  return ( 

    <div className="cart-widget-container">
    {cart.length === 0 ? (
      <div className="cart-widget">
        <h2>Su carro está vacío</h2>
      </div>
    ) : (
      cart.map((element, index) => (
        <Cart  
          title={element.title}
          author_name={element.author_name}
          cover={element.cover_i}
          price={element.want_to_read_count}
          key={index}
          index={index}
          quantity={element.quantity}
        />
      ))
    )}
  </div>

  );

}
export default CartWidget;