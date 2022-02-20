import React from 'react'
import { Link } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Catalogo from "../pages/Catalogo"

import "../styles/NavBar.css"

const Navbar = () => {
    return (
     
            <div className="NavBar">
                <div className="navBar-container">
                    <h1>Proveedor Digital</h1>
                    <ul className="navBar-Linkst">
                        <Link to="/">Home</Link>
                        <Link to="/Catalogo">Catalogo</Link>
                        
                    </ul>
                </div>
            </div>
     
    )
}

export default Navbar