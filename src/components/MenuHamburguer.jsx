import React , {useState} from 'react'
import * as FaIcons from 'react-icons/fa'  /* INSTALAR ICONS */  // yarn add react-icons
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'   /* INSTALAR ROUTER */ // npm install --save react-router-dom
import DataMenu from './DataMenu'
import FotoMobile from '../assets/foto-perfil.png'



const MenuHamburger = () => {

    const [ sidebar , setSidebar] = useState(false)

    const showSidebar = () => setSidebar( !sidebar )


    return (
       <>

       <div className="contenedor-foto-mobile"> 
          <img className="foto-mobile" src={FotoMobile} alt="foto-perfil-mobile" />
       </div>
  
        <div className="navbar">
            <Link to="#" className="menu-bars" >
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
           <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>

                <li className="link-menu-hamburguesa">
                    <a href="#">INFO</a>
                    <a href="#ultimoProyecto">LAST PROJECT</a>  
                    <a href="#proyectos">MY JOBS</a>
                    <a href="#contacto">CONTACT</a>
                </li>
             
            </ul>
        </nav>


      </>
    )
}

export default MenuHamburger
