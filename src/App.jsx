
import { useState, useEffect, useContext } from 'react'
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
import { CartContext } from './components/context/CartContext'





function App() {
const {cart, producto,cargando,error,handleAddToCart,handleDeleteFromCart,isAuthenticated} =useContext(CartContext)



  return (
  
      <Routes>

        <Route path='/' element={<Home/>} />

        <Route path='/acercade' element={<AcercaDe />} />

        <Route path='/products' element={<GaleriaDeProductos />} />

        <Route path='/products/:id' element={<DetallesProductos />}/>

        <Route path='/contactos' element={<Contactos/>} />

        <Route path='/admin' element={ <RutasProtegidas isAuthenticated={isAuthenticated}><Admin/></RutasProtegidas>}/>

        <Route path='/login' element={<Login/>}/> 
        
        <Route path='*' element={<NotFound />} />

      </Routes>

  
  )
}

export default App

