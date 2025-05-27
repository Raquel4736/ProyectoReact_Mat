
import React from 'react'
import './styleCart.css'

function Cart({ cartItems, isOpen, onClose,borrarProducto }) {

    const calcularTotal = () => {
        return cartItems.reduce((total, item) => total + item.precio * item.quantity, 0)
    }

    return (
        <div className={`cart-d ${isOpen ? 'open' : ''}`}>
            <div className='cart-header'>
                <h2>Carrito de Compras</h2>
                <button onClick={onClose} className='close-button' aria-label="Cerrar carrito">✖</button>

            </div>
            <div className='cart-content'>
                {cartItems.length === 0 ? (
                    <p style={{ color: 'red' }}>El carrito está vacío</p>
                ) : (
                    <>
                        <ul className='cart-items'>
                            {cartItems.map((item) => (
                                <li key={item.id} style={{ color: 'black' }}>
                                    {item.nombre} - ${item.precio} x {item.quantity} = ${item.precio * item.quantity}
                            
                                <button onClick={()=>borrarProducto (item)} 
                                            style={{
                                            marginLeft: '8px',
                                            backgroundColor: 'blue',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}><i className="fa-solid fa-trash"></i></button>
                                </li>
                                    
                            ))}
                            
                            
                        </ul>
                    
                        <p><strong>Total:</strong> ${calcularTotal()}</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default Cart


