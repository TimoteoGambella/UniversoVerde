import React from 'react'
import { Link } from 'react-router-dom'

const PantallaError = () => {
    return (
        <div className='bg-gradient-small d-flex-column-align-center-center contenedorProx h-100' >

            <div className="tituloError font-w-500">
                Oups!
            </div>

            <div className='subError'>Algo salió mal</div>

            <p className='font-w-400 textoProx '>
                Estamos trabajando en ello <br />
                Regresa luego por favor!
            </p>

            <img src="/assets/page-error.png" alt="pageErrorImage" className='imagenProx' />

            <Link to="/" className='principal-button d-flex-center botonAceptar'>
                ACEPTAR
            </Link>

            <span className="cajaBack"></span>
            
        </div >
    )
}

export default PantallaError
