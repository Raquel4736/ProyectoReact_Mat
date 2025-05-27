import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div style={{fontSize:"25px"}}>
                404
                <button ><Link to={'/'}>Volver al Inicio</Link></button>
        </div>
        
    )
}

export default NotFound
