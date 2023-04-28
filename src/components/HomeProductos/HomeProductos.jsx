import React, { Fragment, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UseApiContext } from '../../context/ApiContext'

const HomeProductos = () => {

    const { tipo, traigoTituloProductos, productoDestacado } = useContext(UseApiContext)



    useEffect(() => {

        traigoTituloProductos(tipo, "Velas de Soja", "paraProductoDestacado")
        traigoTituloProductos(tipo, "Cabello Graso", "paraProductoDestacado")
        traigoTituloProductos(tipo, "Incienso", "paraProductoDestacado")

    }, [tipo])


    return (
        <div className='w-90 padd-top-25'>
            <h5 className='homeContainer__accesos-itemTitle font-w-400 font-size-14'>Productos destacados...</h5>
            <div className='d-flex-center homeContainer__items-homeItem'>
                {
                    productoDestacado.map((destacado, i) => {
                        return (

                            <Fragment key={i}>
                                <Link className='txtDeco d-flex-column homeContainer__items-homeItem--link' to={`/tiposAromas/${destacado.titulo}`}>
                                    <img src={destacado.foto} alt={destacado.titulo} />
                                    <span className='font-w-500 principal-color font-size-14 homeContainer__items-homeItem--link---txt'>{destacado.titulo}</span>
                                </Link>
                            </Fragment>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}
export default HomeProductos