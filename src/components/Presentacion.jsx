import React from 'react'
import LogoFirma from '../assets/firma.png'
//import FotoPerfil from '../assets/foto-perfil.png'


const Presentacion = () => {
    return (
        <>
        <div className="row contenedor-presentacion">
           <div className="col-md-1 col-sm-1 column-presentacion-1">
                <div className="titulo-presentacion">
                    <h2>PRESENTACIÓN</h2>
                </div>
           </div>

           
           <div className="col-md-3 col-sm-3 column-presentacion-2">
                <div>
                    <h1>GONZALO ALVAREZ</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud.
                    </p>
                    <img src={LogoFirma} alt="logo-firma" />
                </div>
              
         </div>

          <div className="col-md-7 col-sm-7 column-presentacion-3">
              <div className="foto-perfil">

             </div>
          </div>

          <div className="col-md-1 col-sm-1 column-presentacion-4">

          </div> 
    </div>

        </>
    )
}

export default Presentacion
