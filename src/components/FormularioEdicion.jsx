import React, { useState, useEffect } from 'react';

function FormularioEdicion({ productoSeleccionado, onActualizar }) {
    const [producto, setProducto] = useState(productoSeleccionado);

    useEffect(()=>{
        console.log("Producto seleccionado:", productoSeleccionado);
        setProducto(productoSeleccionado)
    },[productoSeleccionado])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });

    };
    return (
        <form style={{}}  onSubmit={(e)=>{
            e.preventDefault()
            onActualizar(producto)
        }}>
            <h3 style={{padding:"10px"}}>Editar Producto</h3>
            <div>
                <label style={{padding:"10px"}}>ID:</label>
                <input
                    type="number"
                    name="id"
                    value={producto.id || ''}
                    onChange={handleChange}
                    readOnly
                />
            </div>
            <div>
                <label style={{padding:"10px"}}>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={producto.nombre || ''}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label style={{padding:"10px"}}>Precio:</label>
                <input
                    type="number"
                    name="precio"
                    value={producto.precio?.trim() ?? ''}
                    onChange={handleChange}
                    required
                    min="0"
                />
            </div>
            <div>
                <label style={{padding:"10px"}}>stock:</label>
                <input
                    type="number"
                    name="stock"
                    value={producto.stock || ''}
                    onChange={handleChange}
                    required
                />
            </div>
            
    
            <button style={{backgroundColor:"papayawhip",borderRadius:"5px",padding:"10px"}} type="submit">Actualizar Producto</button>
        </form>
    );
}
export default FormularioEdicion;