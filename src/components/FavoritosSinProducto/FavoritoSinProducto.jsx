import React from 'react'
import { Link } from 'react-router-dom'

const FavoritoSinProducto = () => {
    return (
        <div className='cartFavSinProductos'>
            <div className='d-flex-column-center favStyle h-100 marTop-30 cartFavSinProductos__container'>

                <img src="/assets/favs-vacio.png" alt="favoritos" />
                <p className='font-w-500 w-90'>Aún no tienes favoritos.</p>

                <div className="cartFavSinProductos__container-boton d-flex-column-center">
                    <Link className='principal-button d-flex-column-center' to="/" >ACEPTAR</Link>
                    <span className='bg-gradient-small d-flex-column'></span>
                </div>
            </div>
        </div>
    )
}

export default FavoritoSinProducto