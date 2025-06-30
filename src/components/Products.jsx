
import React, { useState,useContext } from 'react';
import '../components/styleProducts.css';
import { Link } from 'react-router-dom';
import { CartContext } from './context/CartContext';


function Products({producto }) {
    const { handleAddToCart} =useContext (CartContext)
    const [cantidad, setCantidad] = useState(1);
    const [stockDisponible, setStockDisponible] = useState(producto.stock);

    const increase = () => setCantidad((prev) => (prev < stockDisponible ? prev + 1 : prev));
    const decrease = () => setCantidad((prev) => (prev > 1 ? prev - 1 : 1));

    const handleAgregar = () => {
        if (stockDisponible >= cantidad) {
            handleAddToCart(producto, cantidad);
            setStockDisponible(stockDisponible - cantidad);
            setCantidad(1); 
    };
    }
    return (
        <section className='card'>
            <div className='imgContainer'>
                <img src={producto.url} alt='' className='imagen' />
            </div>
            <h3 className='nombre'>{producto.nombre}</h3>
            <p className='precio'>$ {producto.precio}</p>

            {stockDisponible > 0 ? (
                <p className='stock'>Stock: {stockDisponible}</p>
            ) : (
                <p className='stock' style={{ color: 'red' }}>Sin stock</p>
            )}

            <div className='cantidadContainer'>
                <button className='qtyContainer' onClick={decrease} disabled={stockDisponible === 0}>
                    -
                </button>
                <span>{cantidad}</span>
                <button className='qtyContainer' onClick={increase} disabled={cantidad >= stockDisponible}>
                    +
                </button>
            </div>

            <button onClick={handleAgregar} disabled={stockDisponible === 0}>
                Agregar al carrito
            </button>

            <Link to={`/products/${producto.id}`}>Ver Más</Link>
        
        </section>
    );
}

export default Products;

