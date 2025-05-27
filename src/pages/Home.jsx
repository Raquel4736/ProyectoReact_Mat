import React, { useState } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import Cart from '../components/Cart'

function Home({ cart, producto, agregarCarrito }) {
    const [isCartOpen, setIsCartOpen] = useState(false)

    const abrirCarrito = () => setIsCartOpen(true)
    const cerrarCarrito = () => setIsCartOpen(false)

    return (
        <>

            <Header cartItems={cart} abrirCarrito={abrirCarrito} />
            <Cart cartItems={cart} isOpen={isCartOpen} onClose={cerrarCarrito}  />

            <main className='main'>
                <h1 className='titulo'>Pastelería Mat</h1>
                <p className='titulo1'>Productos artesanales hasta tu hogar</p>
                <h2>Productos Destacados</h2>


                <ProductList agregarCarrito={agregarCarrito} producto={producto} />

            </main>
        

            <Footer />
        </>
    )
}

export default Home
