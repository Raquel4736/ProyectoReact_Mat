
import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import { Link } from 'react-router-dom'


function GaleriaDeProductos({ cart, producto, agregarCarrito,borrarProducto }) {
    return (
        <>
            <Header cartItems={cart} borrarProducto={borrarProducto} />
            <h1>Galería de Productos</h1>
            <ProductList producto={producto} agregarCarrito={agregarCarrito} />
            <Footer />
        </>
    )
}
export default GaleriaDeProductos

