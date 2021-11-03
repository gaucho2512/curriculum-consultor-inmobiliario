import React from 'react'
import LogoBoton from '../assets/Boton-Flecha.png'
import LineaFixedCenter from './LineaFixedCenter'
import LineaFixedHorizontal from './LineaFixedHorizontal'


const MenuBtnOportunidades = () => {
    return (
        <>
           <LineaFixedHorizontal />

<div className="row contenedor-menu-btn-oportunidades" >
 <div className="col-md-1 col-sm-1 column-menu-btn-oportunidades-1">
      <div>
          <h2>02</h2>
      </div>
 </div>



 <div className="col-md-3 col-sm-3 column-menu-datos-2">

 <div className="btn-bajar-secciones-3">
           <a href="#proyectos"> <img  className="btn-logo" src={LogoBoton} alt="logo-boton" /></a>
  </div>

  <a className="enlace-propiedades" href="#">Ver mas propiedades</a>
    
</div>

  <LineaFixedCenter />

<div className="col-md-7 col-sm-7 column-menu-datos-3">

</div>



<div className="col-md-1 col-sm-1 column-menu-datos-4">

</div> 

</div>

<LineaFixedHorizontal />   
        </>
    )
}

export default MenuBtnOportunidades
