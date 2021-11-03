import React from 'react'
import ImagenLeft from '../assets/foto-left.png'
import ImagenCenter from '../assets/foto-center.png'
import ImagenRight from '../assets/foto-right.png'

const CardNovedades = () => {
    return (
        <>
           <div className="contenedor-cards">
                <div className="card-novedades">
                    <div className="imagen-card">
                       <img src={ImagenLeft} alt="imagen-1" />
                    </div>
                    <div className="subtitulo-card">
                        <h4>REAL ESTATE</h4>
                    </div>
                    <div className="titulo-card">
                         <h1>Apostamos a la evolución</h1>
                    </div>
                    <div className="fecha-card">
                        <h4>04 FEB - 2021</h4>
                    </div>
                    <div className="parrafo-card">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing, sed do smod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud incididunt tempor sed dolore et... </p>
                    </div>
                    <div className="ver-mas-card"> 
                         <a href="#">Ver más</a>
                    </div>

                </div>

                <div className="card-novedades">
                <div className="imagen-card">
                       <img src={ImagenCenter} alt="imagen-2" />
                    </div>
                    <div className="subtitulo-card">
                        <h4>ECONOMÍA</h4>
                    </div>
                    <div className="titulo-card">
                         <h1>Todo sobre transacciones</h1>
                    </div>
                    <div className="fecha-card">
                        <h4>04 FEB - 2021</h4>
                    </div>
                    <div className="parrafo-card">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing, sed do smod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud incididunt tempor sed dolore et... </p>
                    </div>
                    <div className="ver-mas-card"> 
                        <a href="#">Ver más</a>
                    </div>
               </div>

                <div className="card-novedades">
                <div className="imagen-card">
                       <img src={ImagenRight} alt="imagen-3" />
                    </div>
                    <div className="subtitulo-card">
                        <h4> LEY DE BLANQUEO</h4>
                    </div>
                    <div className="titulo-card">
                         <h1>Nueva ley de blanqueo</h1>
                    </div>
                    <div className="fecha-card">
                        <h4>04 FEB - 2021</h4>
                    </div>
                    <div className="parrafo-card">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing, sed do smod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud incididunt tempor sed dolore et... </p>
                    </div>
                    <div className="ver-mas-card"> 
                         <a href="#">Ver más</a> 
                    </div>
                </div>
           </div>  
        </>
    )
}

export default CardNovedades
