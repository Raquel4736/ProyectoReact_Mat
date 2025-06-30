import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Admincontext = createContext();
import Swal from "sweetalert2"


export const AdminProvider = ({ children }) => {

    const [producto, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [open, setOpen] = useState(false)
    const [seleccionado, setSeleccionado] = useState(null)
    const [openEditor, setOpenEditor] = useState(false)



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
    const cargarProductos = async () => {
        try {
            const res = await fetch('https://6818ae105a4b07b9d1d05972.mockapi.io/productos-ecommerce/productos')
            const data = await res.json()
            setProductos(data)
        } catch (error) {
            console.log('Error al cargar productos', error);


        }
    }
    const agregarProducto = async (producto) => {
        try {
            const respuesta = await fetch(
                'https://6818ae105a4b07b9d1d05972.mockapi.io/productos-ecommerce/productos',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(producto)
                }
            );

            if (!respuesta.ok) {
                throw new Error('Error al agregar producto');
            }

            const data = await respuesta.json();
            Swal.fire({
                title: "Bien!",
                text: "Producto agregado correctamente",
                icon: "success"
            });



            setProductos(prev => [...prev, data]);

            setOpen(false);
        } catch (error) {
            console.log(error.message);
        }
    };

    const actualizarProducto = async (producto) => {
        try {
            const respuesta = await fetch(`https://6818ae105a4b07b9d1d05972.mockapi.io/productos-ecommerce/productos/${producto.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)

            })
            if (!respuesta.ok) throw Error('Error al actualizar productos')
            const data = await respuesta.json()
            alert('Producto actualizado correctamente')
            setProductos((prev) =>
                prev.map((p) =>
                    String(p.id) === String(data.id) ? data : p
                )
            );

            setOpenEditor(false)
            setSeleccionado(null)


        } catch (error) {
            console.log(error.message)


        }
    }



    const eliminarProducto = async (id) => {

        const confirmar = window.confirm('Estas seguro de eliminar el producto?')
        if (confirmar) {
            try {
                const respuesta = await fetch(`https://6818ae105a4b07b9d1d05972.mockapi.io/productos-ecommerce/productos/${id}`, {
                    method: 'DELETE',

                })
                if (!respuesta.ok) throw Error('Error al eliminar producto')
                setProductos(prevProductos =>
                    prevProductos.filter(producto => producto.id !== id)
                );
                Swal.fire({
                    title: "",
                    text: "Producto eliminado correctamente",
                    icon: "error"
                });


            } catch (error) {
                alert('Hubo un problema al eliminar el producto')
            }

        }

    }



    return (
        <Admincontext.Provider value={{
            producto, loading, open, setOpen, openEditor, setOpenEditor, seleccionado, setSeleccionado,
            agregarProducto, actualizarProducto, eliminarProducto
        }}>
            {children}
        </Admincontext.Provider>
    )
}