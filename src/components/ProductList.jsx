import React from 'react'
import Products from './Products'

function ProductList({ producto,agregarCarrito }) {
    return (
        <>
        
            <div style={{display:"flex", justifyContent:"space-between",flexWrap:"wrap"}}>
                {
                    producto.map(producto => (
                        <Products key={producto.id} producto={producto} agregarCarrito={agregarCarrito}/>
                    ))

                }
            </div>

        </>
    )
}

export default ProductList
