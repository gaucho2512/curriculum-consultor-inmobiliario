import React from 'react'
import Presentacion from '../components/Presentacion'
import Formulario from '../components/Formulario'
import Video from '../components/Video'
import SeccionIngreso from '../components/SeccionIngreso'
import Novedades from '../components/Novedades'
import MenuDatos from '../components/MenuDatos'
import MenuHamburger from '../components/MenuHamburguer'




const Home = () => {
    return (
        <div>
           <MenuHamburger />
           <Presentacion />
           <MenuDatos />
           <Video />
           <SeccionIngreso />
           <Novedades />
           <Formulario />

        </div>
    )
}

export default Home
