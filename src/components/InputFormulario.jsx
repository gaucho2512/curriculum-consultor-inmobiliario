import React , {useRef, useState} from 'react'
import IconoBtn from '../assets/boton-right.png'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import 'animate.css';

const InputFormulario = () => {

    const [error , setError] = useState(false)


   // state datos formulario
    const [datos , setDatos] = useState({
        name: '',
        surname: '',
        email: '',
        message: ''
    });

    const {name, surname,  email, message} = datos


    const handleInputChange = (event) => {
    
        setDatos({
            ...datos, [event.target.name] : event.target.value
        })
    }


    //evento del btn submit
    const sendEmail = (event) => {
      event.preventDefault();
      if (name.trim() === '' || surname.trim() === '' || email.trim() === '' || message.trim() === '') {
          setError(true)
          return
      };

      setError(false);

     setDatos({
        name: '',
        surname: '',
        email: '',
        message: ''
    })

     //funcion para enviar los datos del formulario a mi correo
      emailjs.sendForm('service_curriculum-juan', 'template_z59jql2', event.target, 'user_Zmzbt4X70hYADhU8PnZ6E')
        .then((result) => {
            Swal.fire(
                'Exito!',
                'Su mensaje fue enviado Correctamente!',
                'success'
              )
        }, (error) => {
            alert(error.message)
        });
        event.target.reset();
    };




    return (
        <>
            <div className="contenedor-form-contacto">
                 
                   <form
                     onSubmit={sendEmail}>
                      
                       <input
                        type="text"
                        placeholder="NOMBRE*"
                        name="name"
                        onChange={handleInputChange}
                        value={name}
                       
                         />

                       <input
                        type="text"
                        placeholder="APELLIDO*"
                        name="surname"
                        onChange={handleInputChange}
                        value={surname}
                         />

                       <input
                        type="email"
                        placeholder="EMAIL*"
                        name="email"
                        onChange={handleInputChange}
                        value={email}
                         />

                       <input
                        type="text"
                        placeholder="MENSAJE*"
                        className="input-mensaje"
                        name="message"
                        onChange={handleInputChange}
                        value={message}
                         />

                       

                         <div className="contenedor-submit">
                          
                             {error ? <p className="alert alert-danger w-100 text-center mt-3 p-2">Todos los campos son obligatorios*</p> : null }
                             <div className="btn-submit">
                                 <button
                                 type="submit"
                                 ><img src={IconoBtn} alt="icono-btn" /></button>
                             </div>
                         </div>

                   </form>
            </div>
        </>
    )
}

export default InputFormulario
