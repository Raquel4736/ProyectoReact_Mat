import React ,{useContext}from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { CartContext } from './context/CartContext'

function DetallesProductos() {
    const { id } = useParams()
    const { producto } = useContext(CartContext) 
    const pro = producto.find (produ => produ.id == id)
    const navigate = useNavigate()
    const handleVolver = () => {
        navigate('/products')
    }
    return (
        <div>
            <h2>Detalles del producto: </h2>
            {pro ? (
                <div>
                    <p style={{fontSize:"25px",color:"blue"}}>{pro.nombre}</p>
                    <p style={{fontSize:"20px", color:"blue"}}><strong>Descripción:</strong> {pro.descripcion}</p>
    
                </div>
            ) : (
                <h2>Producto no encontrado</h2>
            )}

            <button onClick={handleVolver} style={{backgroundColor:"lightblue"}}>Volver a la galería</button>
        </div>
    )
}

export default DetallesProductos
