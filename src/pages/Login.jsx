

import React, { useState, useContext } from 'react';

import { CartContext } from '../components/context/CartContext';
import { useAuth } from '../components/context/AuthContext';
import { useNavigate } from 'react-router-dom';




function Login() {

    const {email,setEmail,password,setPassword,handleSubmit, error}=useAuth()
    const {isAuth} = useContext(CartContext)

    if (isAuth) {
    navigate('/admin'); 
}





    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{ padding: "10px" }}>
                    <label htmlFor="username">Usuario: </label>
                    <input
                        id="username"
                        type="email"
                        name="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    
                    />
                        {error.email && (
                        <p style={{ color: 'red', marginTop: '5px' }}>{error.email}</p>)}
                </div>

                <div style={{ padding: "10px" }}>
                    <label htmlFor="password">Contraseña: </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    
                    />
                    {error.password && (
                        <p style={{ color: 'red', marginTop: '5px' }}>{error.password}</p>)}
                </div>

            

                <button type="submit" style={{ padding: "10px" }}>Submit</button>
            </form>
        </div>
    );
}

export default Login;

