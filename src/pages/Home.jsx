import React, { useContext, useState } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import Cart from '../components/Cart'
import { CartContext } from '../components/context/CartContext'
import carga from '../assets/cargando.png'

function Home() {
    const { cargando } = useContext(CartContext)
    return (
        <>
            <Header />
            <main className='main'>
                <h1 className='titulo'>Mat</h1>
                <h1 className='titulo2'>Pastelería</h1>
                <p className='titulo1'>Productos artesanales hasta tu hogar</p>
                <h2>Productos Destacados</h2>

                {
                    cargando ? <img src= {carga} alt="Cargando productos" /> :
                    <ProductList />

                }



            </main>


            <Footer />
        </>
    )
}

export default Home
