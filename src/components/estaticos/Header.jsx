
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styleEstaticos.css';
import Cart from '../Cart';

function Header({ cartItems,borrarProducto }) {
    const [isCartOpen, setCartOpen] = useState(false)
    return (
        <header className='header'>
            <nav>
                <ul>
                    <li><Link to='/' className='link'>Inicio</Link></li>
                    <li><Link to='/acercade' className='link'>Sobre Nosotros</Link></li>
                    <li><Link to='/products' className='link'>Galería de Productos</Link></li>
                    <li><Link to='/contactos' className='link'>Contactos</Link></li>
                    <li className='cartNav'>
                        <button className='btnNav' onClick={() => setCartOpen(true)}><i className="fa-solid fa-cart-shopping"></i></button>
                        
                        <Cart
                            cartItems={cartItems}
                            isOpen={isCartOpen}
                            onClose={() => setCartOpen(false)}
                            borrarProducto={borrarProducto}
                        
                        />

                    </li>
                    <li className='btnLogin'>
            <Link to='/login' className='link'><i className="fa-solid fa-right-to-bracket"></i></Link>
            </li>
            <li className='btnAdmin'>
            <Link to='/admin' className='link'><i className="fa-solid fa-user-tie"></i></Link>
            </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

