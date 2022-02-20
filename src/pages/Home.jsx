import React from 'react'
import "../styles/Portada.css"
import Navbar from '../components/Navbar'
import imagenes from "../img/imagenes"



const Home = () => {
    return (
        
        <div>
  
            <div className="portada-estructura container">
            <div className="estructura-texto">
                <h2>Lanzate como emprendedor!</h2>
                <p>Descubri miles de productos de proveedores perfectos para emprendedor o incluir a tu negocio</p>
            </div>
            <figure className="estructura-foto">
                <img className="imagen-portada" src={imagenes.imgPortada} alt="" />
            </figure>
            

            
        </div>
         
         
   
        </div>
    )
}

export default Home
