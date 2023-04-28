import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom';
import { UseApiContext } from '../../context/ApiContext'

const HomeMasBuscados = () => {

    const { tipo } = useContext(UseApiContext)

    return (
        <div className='w-90 padd-top-25'>
            <h5 className='homeContainer__accesos-itemTitle font-w-400 font-size-14'>Más buscados...</h5>
            <div className='d-flex-center homeContainer__items-homeItem'>
                {
                    tipo.map((cadaTipo, i) => {
                        return (

                            <Fragment key={i}>
                                <Link className='txtDeco d-flex-column homeContainer__items-homeItem--link' to={`/productosBienestar/${cadaTipo.titulo}`}>
                                    <img src={cadaTipo.foto} alt={cadaTipo.titulo} />
                                    <span className='font-w-500 principal-color font-size-14 homeContainer__items-homeItem--link---txt' >{cadaTipo.titulo}</span>
                                </Link>
                            </Fragment>
                            
                        )
                    })
                }
            </div >
        </div >
    )
}

export default HomeMasBuscados