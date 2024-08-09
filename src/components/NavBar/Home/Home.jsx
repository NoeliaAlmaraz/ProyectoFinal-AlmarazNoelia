import React from 'react'
import './Home.css'
import Contact from '../Contact/Contact';



 

    const Home = () => {
 
        return ( 
            <>
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h2>Descubre tu próximo libro favorito</h2>
                            <p>Bienvenido a nuestra librería en línea, donde encontrarás una amplia selección de libros para todos los gustos. Ya sea que busques aventuras, romance, misterio o conocimiento, aquí tenemos algo para ti. ¡Empieza a explorar y encuentra el libro perfecto para ti!</p>
                        </div>
                        <div className="hero-image">
                            <img src="/LOGO.png" alt="logo"  />
                        </div>
                    </div>
                </div>
            </section>
            <div>
            <Contact/>
            </div>

            </>

        )
    }



export default Home;