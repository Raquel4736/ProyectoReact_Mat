import React, { useState } from 'react'
import { Form } from 'react-router-dom'

function FormularioProducto({onAgregar}) {
    const [producto,setProductos]=useState({
        nombre:"",
        precio:"",
        descripcion:""
    })
    const [error,setError]=useState({})
    const handleChange = (e)=>{
        const {name,value}= e.target
        setProductos({...producto,[name]:value})

    }
    const handleSubmit = (e) => {
    e.preventDefault();

    const errores = {};
    if (!producto.nombre.trim()) errores.nombre = "Nombre requerido";
    if (!producto.precio || producto.precio < 0) errores.precio = "Precio inválido";
    if (!producto.descripcion.trim()) errores.descripcion = "Descripción requerida";

    if (Object.keys(errores).length > 0) {
        setError(errores);
        return;
    }

    onAgregar(producto);
    setProductos({ nombre: "", precio: "", descripcion: "" });
    setError({});
};

    return (
        <form  onSubmit={handleSubmit}>
            <h3 style={{padding:"10px"}}>Cargar Producto</h3>
            <div>
                <label  htmlFor=""> Nombre: </label>
                <input type="text" name='nombre' value={producto.nombre} onChange={handleChange} required/>
                {error.nombre} <p style={{color:"red"}}>{error.nombre}</p>
            </div>
            <div>
                <label htmlFor=""> Precio: </label>
                <input type="number" name='precio' value={producto.precio} onChange={handleChange} required min ="0"/>
                {error.precio} <p style={{color:"red"}}>{error.precio}</p>
            </div>
            <div>
                <label htmlFor="">Descripcion: </label>
                <textarea
                name='descripcion' value={producto.descripcion} onChange={handleChange} required />
                {error.descripcion}  <p style={{color:"red"}}>{error.descripcion}</p>
            </div>


            <button style={{backgroundColor:"papayawhip",borderRadius:"5px"}} type="submit">Guardar</button>
        </form>
    
    )
}

export default FormularioProducto
