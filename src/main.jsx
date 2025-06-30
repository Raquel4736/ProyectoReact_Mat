import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

import { CartProvider } from './components/context/CartContext.jsx'
import { AdminProvider } from './components/context/AdminContext.jsx'
import { AuthProvider } from './components/context/AuthContext.jsx'
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
  
      <CartProvider>
        <AdminProvider>
        <AuthProvider>
        <App />
        <ToastContainer/>
        </AuthProvider>
        </AdminProvider>
      </CartProvider>

  </Router>

  </StrictMode>,
)
