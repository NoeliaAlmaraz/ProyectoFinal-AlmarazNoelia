

import React from 'react'
import CartWidgetContainer from '../CartWidgetContainer/CartWIdgetContainer.jsx'
import { useAppContext } from '../Context/Context';

import './NavBar.css'
import { Link } from "react-router-dom";








function NavBar() {
    const { fetchOrders } = useAppContext();

  return ( 
    <header>
        <div>
            <Link to="/">
                <img src="/LOGO.png" alt="logo" />
            </Link>

            
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        Inicio
                    </Link>  
                </li>
                <li>
                    <Link to="/Producto">
                        Productos
                    </Link>
                </li>
                <li>
                    <Link to="/Contacto">
                        Contacto
                    </Link>
                </li>
                <li onClick={ fetchOrders}>
                    <Link to="/Orders">
                        Mis pedidos
                    </Link>
                </li>
            </ul>
        </nav>
        <CartWidgetContainer />


    </header>
  )
}





export default NavBar;