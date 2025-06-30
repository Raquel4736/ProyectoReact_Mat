
import React, { useContext } from 'react'
import './styleCart.css'
import { CartContext } from './context/CartContext'
import Swal from "sweetalert2"

function Cart({ isOpen, onClose }) {
    const { cart, handleDeleteFromCart, clearCart } = useContext(CartContext)

    const calcularTotal = () => {
        return cart.reduce((total, item) => total + item.precio * item.quantity, 0)
    }

    return (
        <div className={`cart-d ${isOpen ? 'open' : ''}`}>
            <div className='cart-header'>
                <h4 style={{ fontFamily: "Inter"}}>Carrito de Compras</h4>
                <button onClick={onClose} className='close-button' aria-label="Cerrar carrito" style={{fontSize:"15px"}}>✖</button>

            </div>
            <div className='cart-content'>
                {cart.length === 0 ? (
                    <p style={{ color: 'red' }}>El carrito está vacío</p>
                ) : (
                    <>
                        <ul className='cart-items'>
                            {cart.map((item) => (
                                <li key={item.id} style={{ color: 'black' }}>
                                    {item.nombre} - ${item.precio} x {item.quantity} = ${item.precio * item.quantity}

                                    <button onClick={() => handleDeleteFromCart(item)}
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
                        <button style={{backgroundColor:"pink",borderRadius:"5px"}}
                            onClick={() => {
                                Swal.fire({
                                    title: "¡Bien!",
                                    text: "Tu compra finalizó con éxito",
                                    icon: "success",
                                    confirmButtonText: "OK"
                                }).then(() => {
                                    clearCart();        
                                });
                            }}
                        >
                            Finalizar Compra
                        </button>




                    </>
                )}
            </div>
        </div>
    )
}

export default Cart


