import React from 'react'
import {
    BrowserRouter as Router,
  } from "react-router-dom";

const NavBar = () => {
    return (

        <Router> 
            <div className="navbar-items">
                <ul>
                    <li> <a href="#informacion">INFO</a> </li>
                    <li> <a href="#ultimoProyecto">LAST PROJECT</a> </li>
                    <li> <a href="#proyectos"> MY JOBS</a> </li>
                    <li className="li-contacto"> <a href="#contacto">CONTACT</a></li>
                </ul>
            </div>
        </Router>
    )
}

export default NavBar
