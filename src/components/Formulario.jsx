import React from 'react'

function Formulario() {
    return (
        
            <form >
            <div className="formulario" style={{padding:"10px"}}>
        <label for="nombre">Nombre: </label>
        <input type="text" placeholder="Ingrese su nombre" required name="nombre" id="nombre"/>
        </div>
    <div className="formulario"style={{padding:"10px"}}>
        <label for="apellido">Apellido: </label>
        <input type="text" placeholder="Ingrese su apellido" required name="apellido" id="apellido"/>
        </div>
    <div  className="formulario"style={{padding:"10px"}}>
        <label for="telefono"> Numero de Telefono: </label>
        
        <input type="tel" placeholder="Ingrese su numero de telefono" name="telefono" id="telefono"/>
        </div>
    <div  className="formulario"style={{padding:"10px"}}>
        <label for="correo">Email: </label>
        <input type="email"  placeholder="Ingrese su email"  name="correo" id="correo"/>
        </div>
        <div  className="formulario"style={{padding:"10px"}}>
        
            <textarea rows="5" cols="30" placeholder="Consultas" name="comentarios" id="comentarios"></textarea>
        </div>
        <div className="formulario"style={{padding:"10px"}}>
            <input type="reset" value="Limpiar Formulario"/> </div>
        <div className="formulario"style={{padding:"10px"}}>  
            <input  type="submit" value="Enviar formulario" id="enviarFormulario"/>
        </div> 
        </form>

    
    )
}

export default Formulario
