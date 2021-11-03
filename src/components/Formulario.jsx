import React from 'react'
import InputFormulario from './InputFormulario'



const Formulario = () => {
    return (
        <>
           
 <div className="imagen-contenedora-fondo"> 
     <div className="row contenedor-formulario" id="contacto">
               <div className="col-md-1 col-sm-1 column-formulario-1">
                   <div className="titulo-formulario">
                      <h2>CONTACTO</h2>
                  </div>
               </div>

            
               
    <div className="linea-fija-blanca-left"></div>
  
           <div className="col-md-3 col-sm-3 column-formulario-2 " id="formulario">
                     <div className="titulo-cafe">
                        <h1>¿TOMAMOS <br /> UN CAFÉ?</h1>
                     </div>
                     <div className="celular">
                         <h4> <a href="#">WHATS APP     11-3434-8080</a> </h4>
                     </div>
                     <div className="tel-fijo">
                         <h4> <a href="#">TEL    4779-9955</a> </h4>
                     </div>
                     <div className="email">
                         <h4> <a href="#">G.ALVAREZ@REMAX.COM</a> </h4>
                     </div>
           </div>

           <div className="linea-fija-blanca-center"></div>

          

        <div className="col-md-7 col-sm-7 column-formulario-3">
             <div className="row">
                 <div className="col-md-4 col-sm-4 contacto-left" >
                       <div>
                           <h2>No te quedes  con dudas, <span> contactanos.</span></h2>
                       </div>
                       <div>
                           <h4>Envia tu consulta y nos pondremos <a href="#">en contacto.</a></h4>
                       </div>
                 </div>

                 <div className="col-md-8 col-sm-8 contacto-right" >
                      <InputFormulario />
                 </div>
             </div>
        </div>
        
        <div className="col-md-1 col-sm-1 column-formulario-4">
     
        </div>

  </div>

       
 </div>

          
        </>
    )
}

export default Formulario
