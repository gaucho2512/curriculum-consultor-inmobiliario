import React from 'react'
import NavBar from './NavBar'
import LogoFacebook from '../assets/logo-facebook.png'
import LogoInstagram from '../assets/logo-instagram.png'
import LogoLinkedin from '../assets/logo-linkedin.png'
import LineaFixedHorizontal from './LineaFixedHorizontal'
import LineaFixedLeft from './LineaFixedLeft'
import LineaFixedCenter from './LineaFixedCenter'
import LineaFixedRight from './LineaFixedRight'






const Headers = () => {
    return (
        <>

        <LineaFixedHorizontal />

        <div className="row contenedor-headers">
           <div className="col-md-1 col-sm-1 column-1">
                <div>
                    <h2>GA.</h2>
                </div>
           </div>

          
            <LineaFixedLeft /> 
           <div className="col-md-3 col-sm-3 column-2">
               <div>
                   <h4>Consultor inmobiliario</h4>
               </div>
               <div className="logos-header">
                     <div>
                         <a href="https://www.facebook.com/juan.ariztegui.5" target="_blank"> <img className="facebook" src={LogoFacebook} alt="logo-facebook" /></a>
                     </div>
                     <div>
                         <a href="https://www.instagram.com/juan_ariztegui/?hl=es" target="_blank"> <img className="instagram" src={LogoInstagram} alt="logo-instagram" /></a>
                     </div>
                     <div className="logo-instagram-margin">
                          <a href="https://www.linkedin.com/in/juan-carlos-ariztegui/" target="_blank"> <img className="linkedin" src={LogoLinkedin} alt="logo-linkedin" /></a>
                     </div>
               </div>
          </div>

         <LineaFixedCenter />

          <div className="col-md-7 col-sm-7 column-3">
               <div className="telefono">
                   <h4>11  2626 1122</h4>
               </div>

               <div className="navegacion">
                    <NavBar />
               </div>
         </div>

       
      <LineaFixedRight />

         <div className="col-md-1 col-sm-1 column-4">

        </div> 
    </div>

    <LineaFixedHorizontal />

        </>
    )
}

export default Headers
