import React from 'react'
import { Link } from 'react-router-dom'
import NavbarTerciario from '../Navbar/NavbarTerciario'

const CompraRealizada = () => {
    return (
        <div className='compraRealizadaStyle'>
            <NavbarTerciario />

            <div className='d-flex-column-center h-100  w-100 compraRealizadaStyle__container'>

                <div className="compraRealizadaStyle__container-txt">
                    <div className='font-size-20 font-w-500 d-flex-column-center compraRealizadaStyle__container-txt-textoGracias'>
                        ¡Gracias por su compra! <br />
                        Su pedido va a estar llegando en 3 días hábiles
                    </div>
                </div>

                <Link to="/" className='principal-button d-flex-column-center  compraRealizadaStyle__container-aceptarCompra'>ACEPTAR</Link>
                <img className='w-100 h-100' src="/assets/compra-finalizada.png" alt="background" />

            </div >
            
        </div>
    )
}

export default CompraRealizada