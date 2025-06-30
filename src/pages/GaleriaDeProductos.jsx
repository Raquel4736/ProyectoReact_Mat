
import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import { Link } from 'react-router-dom'
import { CartContext } from '../components/context/CartContext'
import carga from '../assets/cargando.png'


function GaleriaDeProductos() {
    const { cargando } = useContext(CartContext)
    return (
        <>
            <Header />
            <h1 style={{padding:"10px",fontFamily: "Inter",marginTop:"30px"}}>Galería de Productos</h1>
            {
                cargando ? <img src={carga} alt="Cargando productos" /> :
                    <ProductList />

            }


        </>
    )
}
export default GaleriaDeProductos

