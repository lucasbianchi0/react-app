import React from 'react'
import "./Portada.css"
import imagenes from '../../img/imagenes'

const Portada = () => {
    return (
        <div className="portada-estructura container">
            <div className="estructura-texto">
                <h2>Lanzate como emprendedor!</h2>
                <p>Descubri miles de productos de proveedores perfectos para emprendedor o incluir a tu negocio</p>
            </div>
            <figure className="estructura-foto">
                <img className="imagen-portada" src={imagenes.imgPortada} alt="" />
            </figure>
            

            
        </div>
    )
}

export default Portada
