import React from 'react'
import LogoBoton from '../assets/Boton-Flecha.png'
import DatosNuevoIngreso from './DatosNuevoIngreso'
import LineaFixedCenter from './LineaFixedCenter'
import LineaFixedHorizontal from './LineaFixedHorizontal'
import MenuBtnOportunidades from './MenuBtnOportunidades'




const SeccionIngreso = () => {
    return (
        
        <>
        {/* ROW 1 */}
        <LineaFixedHorizontal />

        <div className="row contenedor-barra-ingreso" id="ultimoProyecto">
           <div className="col-md-1 col-sm-1 column-barra-ingreso-1">
               
           </div>

          
           <div className="col-md-3 col-sm-3 column-barra-ingreso-2">

           <div className="btn-bajar-secciones-2">
           <a href="#ultimoProyecto"> <img  className="btn-logo" src={LogoBoton} alt="logo-boton" /></a>
           </div>

          </div>

          <LineaFixedCenter />

          <div className="col-md-7 col-sm-7 column-barra-ingreso-3">
             
         </div>


         <div className="col-md-1 col-sm-1 column-barra-ingreso-4">

        </div> 
    </div>

    <LineaFixedHorizontal />


    {/* ROW 2 */}
    <div className="row contenedor-seccion-ingreso">
           <div className="col-md-1 col-sm-1 column-seccion-ingreso-1">
           <div className="titulo-oportunidades">
                    <h2>OPORTUNIDADES</h2>
                </div>
           </div>

          
           <div className="col-md-3 col-sm-3 column-seccion-ingreso-2">
              <DatosNuevoIngreso />
          </div>

          <div className="col-md-7 col-sm-7 column-seccion-ingreso-3">
          
         </div>


         <div className="col-md-1 col-sm-1 column-seccion-ingreso-4">

        </div> 
    </div>

      <MenuBtnOportunidades />

        </>
          
          
        
    )
}

export default SeccionIngreso
