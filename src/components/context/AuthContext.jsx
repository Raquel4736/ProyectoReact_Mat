import React, { useContext, createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';


const Authcontext = createContext()
export const AuthProvider = ({ children }) => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState({})
    const [password, setPassword] = useState("");
    const { setIsAuth } = useContext(CartContext)

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuth') === 'true';
        setIsAuth(isAuthenticated); // solo actualiza el estado
    }, []);



    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();

        let validacion = {};
        if (!email.trim()) validacion.email = 'Email es requerido';
        if (!password.trim()) validacion.password = 'Contraseña requerida';

        if (Object.keys(validacion).length > 0) {
            setError(validacion);
            return;
        }

        try {
            const res = await fetch('data/user.json');
            const users = await res.json();
            console.log(users);
            const foundUser = users.find((user) =>
                user.email === email && user.password === password
            );
            console.log("Usuario encontrado:", foundUser);

            if (!foundUser) {
                console.log("Usuario no encontrado");
                setError({ email: 'Credenciales inválidas' });
            } else {

                console.log("Usuario encontrado:", foundUser);
                setIsAuth(true);
                localStorage.setItem('isAuth', true)
                setEmail('');
                setPassword('');
                setError({});
                if (foundUser.role === 'admin') {
                    console.log("Redirigiendo a /admin");
                    navigate('/admin');
                } else {
                    console.log("Redirigiendo a /");
                    navigate('/');
                }
            }
        } catch (error) {
            console.error("Error de carga:", error);
            setError({ email: 'Se ha producido un error. Por favor intente nuevamente.' });
        }
    };

    return (
        <Authcontext.Provider value={{ email, setEmail, password, setPassword, handleSubmit, error }}>
            {children}
        </Authcontext.Provider>
    )

}
export const useAuth = () => useContext(Authcontext)


