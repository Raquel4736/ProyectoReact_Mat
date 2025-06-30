import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import imagen from '../assets/img4.jpg'

function Acercade() {
    return (
        <>
            <Header />
            <h1 style={{padding:"30px"}}>Quienes somos</h1>
            <section className="somos">
                <div>
                    En Mat, nos apasiona el arte de la pastelería artesanal. Cada creación que sale de nuestro horno está hecha con dedicación, utilizando las mejores materias primas para garantizar una experiencia deliciosa en cada bocado. Creemos que la calidad empieza desde los ingredientes, por eso seleccionamos cuidadosamente productos frescos, locales y naturales, sin conservantes ni aditivos artificiales.
                </div>
                <div>
                    Nuestro compromiso es ofrecerte pasteles, tartas y dulces únicos, con recetas tradicionales y un toque moderno, siempre respetando el sabor auténtico de cada ingrediente. Nos esforzamos por hacer de cada ocasión, un momento especial, lleno de dulzura y calidad.
                </div>
                <div>
                    Gracias por confiar en nosotros para endulzar tus días.
                </div>
                <img src={imagen} alt="Imagen de pastelería" className="imagen-acerca" style={{ width: "250px", boxShadow: "0 4px 7px rgba(0,0,0,1)", padding: "10px", marginTop: "10px" }} />

            </section>

            <Footer />
        </>
    )
}

export default Acercade


