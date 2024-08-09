import React from 'react'
import './Contact.css'

const Contact = () => {
 
 return ( 
    <footer className="footer-contact">
            <div className="container">
                <h2>Contacto</h2>
                <p>Dirección: Calle Falsa 123, Ciudad, País</p>
                <p>Teléfono: +123 456 789</p>
                <p>Email: contacto@ejemplo.com</p>
                <p>Síguenos en:</p>
                <ul className="social-media">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>
    </footer>
)
}
export default Contact;