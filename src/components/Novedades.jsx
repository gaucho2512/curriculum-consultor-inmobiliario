import React from 'react'
import LogoBoton from '../assets/Boton-Flecha.png'
import CardNovedades from './CardNovedades'


const Novedades = () => {
    return (
        <>
    {/* Columna 1 */}
     <div className="row contenedor-novedades" id="proyectos">
               <div className="col-md-1 col-sm-1 column-novedades-1">
                   <div className="titulo-novedades">
                      <h2>NOVEDADES</h2>
                  </div>
               </div>
               
    <div className="linea-fija-negra-left"></div>
  
           <div className="col-md-10 col-sm-10 column-novedades-2">
                     <CardNovedades />
           </div>

           <div className="linea-fija-negra-right"></div>



        <div className="col-md-1 col-sm-1 column-novedades-3">
     
        </div>

       
 </div>


 {/* Columna 2  */}

 <div className="linea-fija-negra"></div>

<div className="row contenedor-menu-btn-novedades">
 <div className="col-md-1 col-sm-1 column-menu-btn-novedades-1">
      <div>
          <h2>03</h2>
      </div>
 </div>



 <div className="col-md-3 col-sm-3 column-menu-datos-2">

 <div className="btn-bajar-secciones-4">
           <a href="#contacto"> <img  className="btn-logo" src={LogoBoton} alt="logo-boton" /></a>
  </div>

  <a className="enlace-novedades" href="#">Ver todas las novedades</a>
    
</div>

  
<div className="col-md-7 col-sm-7 column-menu-datos-3">

</div>

<div className="col-md-1 col-sm-1 column-menu-datos-4">

</div> 

</div>


<div className="linea-fija-negra"></div>
           
           
        </>
    )
}

export default Novedades
