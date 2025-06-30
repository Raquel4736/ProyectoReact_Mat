import React, { useContext, useState } from 'react'
import Products from './Products'
import { CartContext } from './context/CartContext'
import Pagination from 'react-bootstrap/Pagination';

function ProductList() {
    const {productosFiltrados,busqueda,setBusqueda} =useContext (CartContext)
    const  [paginacion,setPaginacion] = useState(1)
    const itemsxpage =3
    const indexOfLast= paginacion*itemsxpage
    const indexOfFirst= indexOfLast-itemsxpage
    const currentProducts =productosFiltrados.slice(indexOfFirst,indexOfLast)
    const totalPages=Math.ceil(productosFiltrados.length/itemsxpage)


    
    return (
        <>
        <input type="text"style={{margin:"10px", padding:"10px", fontSize:"medium"}}
        placeholder='Buscar productos...'
        value={busqueda} 
        onChange={(e)=>{ setBusqueda(e.target.value)}}/>
        
            <div style={{display:"flex", justifyContent:"space-between",flexWrap:"wrap"}}>
                {
                currentProducts.map(producto => (
                        <Products key={producto.id} producto={producto}/>
                    ))

                }
            </div>
            <Pagination>
                <Pagination.Prev onClick= {()=> setPaginacion (p =>Math.max(p-1,1))}
                    disabled={paginacion ===1}/>
                    {
                        Array.from({length:totalPages},(_,i)=>(
                            <Pagination.Item key={i+1} active={i+1===paginacion}
                            onClick={()=>setPaginacion(i+1)}>
                                {i+1}

                            </Pagination.Item>
                        ))
                    }
                <Pagination.Next onClick={()=> setPaginacion(p=> Math.min(p+1,totalPages))}
                disabled={paginacion=== totalPages}/>
            </Pagination>

        </>
    )
}

export default ProductList
