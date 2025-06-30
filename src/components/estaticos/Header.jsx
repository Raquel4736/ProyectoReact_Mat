
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styleEstaticos.css';
import Cart from '../Cart';



function Header() {
    const [isCartOpen, setCartOpen] = useState(false)
    return (
        <header className='header'>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                <img src="/favicon.ico" alt="Logo" style={{ height: '40px', marginRight: '40px',marginLeft:"20px" }} />

                    <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link">Inicio</NavLink>
                            </li>
                            <li><NavLink to='/acercade' className="nav-link">Sobre Nosotros</NavLink></li>
                            <li><NavLink to='/products' className="nav-link">Galería de Productos</NavLink></li>
                            <li><NavLink to='/contactos' className="nav-link">Contactos</NavLink></li>
                            <li className='cartNav'>
                                <button className='btnNav' onClick={() => setCartOpen(true)}><i className="fa-solid fa-cart-shopping"></i></button>

                                <Cart
                                    isOpen={isCartOpen} onClose={() => setCartOpen(false)}
                                />

                            </li>
                            <li className='btnLogin'>
                                <Link to='/login' className="nav-link"><i className="fa-solid fa-right-to-bracket"></i></Link>
                            </li>
                            <li className='btnAdmin'>
                                <Link to='/admin' className="nav-link"><i className="fa-solid fa-user-tie"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    );
}

export default Header;

