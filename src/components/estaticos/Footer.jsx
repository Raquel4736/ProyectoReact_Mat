import React from 'react'
import  './styleEstaticos.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <p style={{margin:""}}>&copy, Pasteleria Mat 2025</p>
            <nav >
                <ul style={{display:"block" }}>
                    <li><Link to='/' className='link'>Inicio</Link></li>
                    <li><Link to='/acercade' className='link'>Sobre Nosotros</Link></li>
                    <li><Link to='/products' className='link'>Galería de Productos</Link></li>
                    <li><Link to='/contactos' className='link'>Contactos</Link></li>
            
            
                </ul>
            </nav>
        </footer>
    )
}

export default Footer
