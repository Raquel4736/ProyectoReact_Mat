

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
        setErrorMessage("Las contraseñas no coinciden");
        setIsLoggedIn(false);
    } else {
        setErrorMessage("");
        setIsLoggedIn(true);

        // Limpiar campos
        setUsername("");
        setPassword("");
        setConfirmPassword("");
    }

        if (password !== confirmPassword) {
            setErrorMessage("Las contraseñas no coinciden");
            setIsLoggedIn(false);
        } else {
            setErrorMessage("");
            setIsLoggedIn(true); 

            
            console.log("Formulario enviado con:", { username, password });
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{padding:"10px"}}>
                    <label htmlFor="username">Usuario: </label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        autoComplete="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div style={{padding:"10px"}}>
                    <label htmlFor="password">Contraseña: </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div style={{padding:"10px"}}>
                    <label htmlFor="confirmPassword">Confirmar Contraseña: </label>
                    <input
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        autoComplete="new-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                {errorMessage && (
                    <p style={{ color: "red" }}>{errorMessage}</p>
                )}

                {isLoggedIn && (
                    <p style={{ color: "green" }}>Inicio de sesión exitoso</p>
                )}

                <button type="submit" style={{padding:"10px"}}>Sign In</button>
            </form>
        </div>
    );
}

export default Login;

