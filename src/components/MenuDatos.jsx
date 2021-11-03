import React from 'react'
import LineaFixedHorizontal from './LineaFixedHorizontal'
import LogoWhatsapp from '../assets/logo-whatsapp.png'
import LogoBoton from '../assets/Boton-Flecha.png'
import LineaFixedCenter from './LineaFixedCenter'



const MenuDatos = () => {
    return (
        <>
               <LineaFixedHorizontal />

  <div className="row contenedor-menu-datos" id="informacion">
   <div className="col-md-1 col-sm-1 column-menu-datos-1">
        <div>
            <h2>01</h2>
        </div>
   </div>

  
 
   <div className="col-md-3 col-sm-3 column-menu-datos-2">

   <div className="btn-bajar-secciones">
           <a href="#informacion"> <img  className="btn-logo" src={LogoBoton} alt="logo-boton" /></a>
   </div>
   
     <a href="https://www.linkedin.com/in/juan-carlos-ariztegui/" target="_blank">(Quiero saber mas)</a>  
      
  </div>

    <LineaFixedCenter />

  <div className="col-md-7 col-sm-7 column-menu-datos-3">

      <div className="categoria-datos">
          <h3>6</h3>
          <span>Años de <br /> experiencia</span>
      </div>
      <div className="categoria-datos">
          <h3>110</h3>
          <span>Operaciones <br /> exitosas</span>
      </div>
      <div className="categoria-datos">
          <h3>+6</h3>
          <span>Lorem <br /> ipsum</span>
      </div>

     
 </div>



 <div className="col-md-1 col-sm-1 column-menu-datos-4">
       <div className="logo-whatsapp-fixed">
           <a href=""> <img src={LogoWhatsapp} alt="logo-whatsapp" /></a>
       </div>
</div> 
</div>

<LineaFixedHorizontal />

        </>
    )
}

export default MenuDatos
