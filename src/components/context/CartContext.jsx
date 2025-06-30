import { createContext, useContext, useEffect, useState } from "react";
import {toast} from "react-toastify"

export const CartContext = createContext()
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [producto, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(false)
    const [isAuthenticated, setIsAuth] = useState(false)
    const [busqueda,setBusqueda] =useState("")

    useEffect(() => {
        fetch('/data/data.json')
            .then(respuesta => respuesta.json())
            .then(datos => {
                setTimeout(() => {
                    setProductos(datos)
                    setCargando(false)
                }, 2000)
            })
            .catch(error => {
                console.log('Error', error)
                setCargando(false)
                setError(true)
            })

    }, [])

    const productosFiltrados= producto.filter((productos)=>productos ?. nombre.toLowerCase(). includes
    (busqueda.toLowerCase()
    ))

    const handleAddToCart = (producto, cantidad) => {
        const productInCart = cart.find((item) => item.id === producto.id);

        if (productInCart) {
            setCart(
                cart.map((item) =>
                    item.id === producto.id
                        ? { ...item, quantity: item.quantity + cantidad }
                        : item
                )
            );
        } else {
            toast.success(`El producto ${producto.nombre} se ha agregado al carrito`)
            setCart([...cart, { ...producto, quantity: cantidad }]);
        }
    };


    const handleDeleteFromCart = (producto) => {
        toast.error(`El producto ${producto.nombre} se ha eliminado del carrito`)
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.id === producto.id) {
                    if (item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return null;
                    }
                } else {
                    return item;
                }
            }).filter(item => item !== null);
        });
    };
    const clearCart = () => {
    setCart([]); 
};



    return (
    <CartContext.Provider value = {{cart, producto,cargando,error,handleAddToCart,handleDeleteFromCart,
    isAuthenticated, setIsAuth,productosFiltrados,busqueda,setBusqueda ,clearCart }} >
        { children }
    
    </CartContext.Provider >

    )
}