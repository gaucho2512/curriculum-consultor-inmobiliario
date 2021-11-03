import React from 'react'
import LogoM2 from '../assets/m2.png'
import LogoBaños from '../assets/ducha.png'
import LogoAmbientes from '../assets/sillon.png'
import LogoCocheras from '../assets/car.png'
import LogoLocalizacion from '../assets/logo-localizacion.png'

const DatosNuevoIngreso = () => {
    return (
        <>
           <div className="titulo-ultimo-ingreso">
                   <h1>ÚLTIMO <br /> INGRESO</h1>
               </div>

               <div className="linea-caja-inmueble"></div>
               <div className="tipo-inmueble">
                    
                    <div>
                        
                        <h3>DEPARTAMENTO</h3>
                    </div>
                    <div>
                        <span>VENTA</span>
                    </div>
               </div>
               <div className="linea-caja-inmueble"></div>

               <div className="ficha-propiedad">
                   <div className="titulo-direccion">
                       <img src={LogoLocalizacion} alt="logo-mapa" />
                       <h4>Libertador 5220, Vicente López</h4>
                   </div>

                   <div className="datos-depto-fila-1">
                        <div className="medida">
                          <img src={LogoM2} alt="logo-medida" /> 
                            <h4>155 M2</h4>
                        </div>
                        <div className="baños">
                            <img src={LogoBaños} alt="logo-baños" />
                            <h4>3 Baños</h4>
                        </div>
                   </div>

                    <div className="datos-depto-fila-2"> 
                        <div className="ambientes">
                            <img src={LogoAmbientes} alt="logo-ambientes" />
                             <h4>6 Ambientes</h4>
                        </div>
                        <div className="cocheras">
                            <img src={LogoCocheras} alt="logo-cocheras" />
                            <h4>2 Cocheras</h4>
                        </div>
                   </div>

                   <div className="valor">
                        <div>
                           <h4>U$D 450.000</h4>
                        </div>
                        <div>
                            <a href="#">Ver más</a>
                        </div>
                   </div>
               </div>
        </>
    )
}

export default DatosNuevoIngreso
