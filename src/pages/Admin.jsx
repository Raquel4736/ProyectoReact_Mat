
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import FormularioProducto from "../components/FormularioProducto";
import FormularioEdicion from "../components/FormularioEdicion";
import { CartContext } from "../components/context/CartContext";
import { useNavigate } from "react-router-dom";
import { Admincontext } from "../components/context/AdminContext";
import '../components/styleProducts.css';
const Admin = () => {
    const { setIsAuth } = useContext(CartContext)
    const navigate = useNavigate()


    const { producto, loading, open, setOpen, openEditor, setOpenEditor, seleccionado, setSeleccionado,
        agregarProducto, actualizarProducto, eliminarProducto } = useContext(Admincontext)
    return (
        <div className="container">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <nav>
                        <ul className="nav">
                            <li className="navItem">
                                <button className="navButton" onClick={() => {
                                    setIsAuth(false)
                                    localStorage.removeItem('isAuth');
                                    navigate('/')
                                }}>
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                </button>
                            </li>
                            <li className="navItem" style={{
                                color: "blue",
                                backgroundColor: "lightgray",
                                padding: "10px",
                                borderRadius: "5px",
                                minWidth: "100px",
                                cursor: "pointer"
                            }}>
                                <Link to="/">Volver al inicio</Link>
                            </li>

                        </ul>
                    </nav>
                    <h1 className="title">Panel Administrativo</h1>
                    <ul className="list productos-grid">

                        {producto.map((producto) => (
                            <li key={producto.id} className="listItem" >

                        
                                <div className="card" style={{ width: "100%" }}>
                                    <img
                                        src={producto.url}
                                        alt=""
                                        className="imagen"
                                    />


                                    <div className="card-body">
                                        <span className="card-text">{producto.nombre}</span>
                                    </div>
                                    <div className="card-body">

                                        <span className="card-text"> $ {producto.precio}</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px", flexWrap: "wrap" }}>
                                        <button
                                            style={{
                                                color: "blue",
                                                backgroundColor: "lightgray",
                                                padding: "10px",
                                                borderRadius: "5px",
                                                minWidth: "100px"
                                            }}
                                            className="editButton"
                                            onClick={() => {
                                                setOpenEditor(true);
                                                setSeleccionado(producto);
                                            }}
                                        >
                                            Editar
                                        </button>

                                        <button
                                            className="deleteButton"
                                            style={{
                                                color: "blue",
                                                backgroundColor: "lightgray",
                                                padding: "10px",
                                                borderRadius: "5px",
                                                minWidth: "100px"
                                            }}
                                            onClick={() => eliminarProducto(producto.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>


                                </div>
                            </li>
                        ))}
                    </ul>



                </>
            )
            }
            <button onClick={() => setOpen(true)}>Agregar producto nuevo</button>

            {open && <div className="overlay" onClick={() => setOpen(false)} />}

            <div className={`sidebar ${open ? "open" : ""}`}>
                <FormularioProducto
                    onAgregar={(nuevoProducto) => {
                        agregarProducto(nuevoProducto);
                        setOpen(false);
                    }}
                    onClose={() => setOpen(false)}
                />
            </div>
            {openEditor && <div className="overlay" onClick={() => setOpenEditor(false)} />}

            <div className={`sidebar ${openEditor ? "open" : ""}`}>
                {openEditor && (
                    <FormularioEdicion
                        productoSeleccionado={seleccionado}
                        onActualizar={(productoActualizado) => {
                            actualizarProducto(productoActualizado);
                            setOpenEditor(false);
                        }}
                        onClose={() => setOpenEditor(false)}
                    />
                )}
            </div>
        </div >



    )

}

export default Admin;
