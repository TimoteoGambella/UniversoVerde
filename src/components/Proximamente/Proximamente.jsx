import React from 'react'
import { Link } from 'react-router-dom'

const Proximamente = () => {
    return (
        <div>
            <div className='bg-gradient-small d-flex-column-center w-100 contenedorProx'>

                <div className="font-w-500 contenedorProx-titulo">
                    PRÓXIMAMENTE
                </div>

                <p className='font-w-400 contenedorProx-txt'>Estamos trabajando en la construcción de esta sección</p>
                <img src="/assets/page-error.png" alt="pageErrorImage" />
                <Link to="/" className='principal-button d-flex-center botonAceptar' >
                    ACEPTAR
                </Link>
                <span className="contenedorProx-backbox"></span>

            </div>
        </div>
    )
}

export default Proximamente