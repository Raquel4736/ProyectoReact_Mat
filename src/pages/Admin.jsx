
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
    const [productos, setProductos] = useState([]);
    const [form, setForm] = useState({ id: null, name: "", price: "" });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);



    useEffect(() => {
        fetch("/data/data.json")
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setProductos(data);
                    setLoading(false);
                }, 2000);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError(true);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <nav>
                        <ul className="nav">
                            <li className="navItem">
                                <button className="navButton">
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                </button>
                            </li>
                            <li className="navItem">
                                
                                <Link to="/admin">Admin</Link>
                            </li>
                        </ul>
                    </nav>
                    <h1 className="title">Panel Administrativo</h1>
                    <form className="form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre del producto"
                            className="input"
                            required
                        />
                        <input
                            type="number"
                            name="price"
                            placeholder="Precio del producto"
                            className="input"
                            required
                        />
                        <button type="submit" className="button">
                            {form.id ? "Editar" : "Crear"}
                        </button>
                    </form>
                    <ul className="list">
                        {productos.map((producto) => (
                            <li key={producto.id} className="listItem">
                                <img
                                    src={producto.imagen}
                                    alt={producto.nombre}
                                    className="listItemImage"
                                />
                                <span>{producto.nombre}</span>
                                <span>${producto.precio}</span>
                                <div>
                                    <button className="editButton">Editar</button>

                                    <button className="deleteButton">Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default Admin;
