
import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import Contactos from './pages/Contactos'
import GaleriaDeProductos from './pages/GaleriaDeProductos'
import NotFound from './components/NotFound'
import Products from './components/Products'
import Login from './pages/Login'
import RutasProtegidas from './auth/RutasProtegidas'
import Admin from './pages/Admin'
import DetallesProductos from './components/DetallesProductos'




function App() {

  const [cart, setCart] = useState([])
  const [producto, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)
  const [isAuthenticated,setIsAuth] = useState(false)

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
    setCart([...cart, { ...producto, quantity: cantidad }]); 
  }
};


  const handleDeleteFromCart = (producto) => {
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



  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home borrarProducto={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} producto={producto}  />} />

        <Route path='/acercade' element={<AcercaDe borrarProducto={handleDeleteFromCart} cart={cart} />} />

        <Route path='/products' element={<GaleriaDeProductos borrarProducto={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} producto={producto}  />} />

        <Route path='/products/:id' element={<DetallesProductos producto={producto}/>}/>

        <Route path='/contactos' element={<Contactos borrarProducto={handleDeleteFromCart} cart={cart} />} />

        <Route path='/admin' element={ <RutasProtegidas isAuthenticated={isAuthenticated}><Admin/></RutasProtegidas>}/>

        <Route path='/login' element={<Login/>}/> 
        
        <Route path='*' element={<NotFound />} />

      </Routes>

    </Router>
  )
}

export default App

