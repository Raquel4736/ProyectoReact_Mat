import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import Formulario from '../components/Formulario'
import { Link } from 'react-router-dom'

function Contactos({cart}) {
    return (
        <>
        <Header cartItems={cart}/>
            <h1>Contactos</h1>
        <Formulario/>
        <Footer/>
        </>
    )
}

export default Contactos
