import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { UseApiContext } from '../../context/ApiContext'
import SubtituloTipoBienestar from '../SubtituloTipoBienestar/SubtituloTipoBienestar'

const TipoList = ({ tiposEnBienestares, tipoBienestarId }) => {

    const { sectionId } = useParams()
    const { coleccion } = useContext(UseApiContext)
    const [tituloFisico, setTituloFisico] = useState([])

    useEffect(() => {
        for (const key in coleccion) {
            setTituloFisico(coleccion[key]["tipo-bienestar"][0].titulo)
        }
    }, [])

    return (
        <>

            < SubtituloTipoBienestar sectionId={sectionId} tituloFisico={tituloFisico} tipoBienestarId={tipoBienestarId} />

            <div className='full w-100 d-flex-column bg-gradient-large tiposBienestarStyle'>


                {tiposEnBienestares.map((cadaTipoEnBienestar, i) => {

                    return (
                        < div className="br-16 tiposBienestarStyle__container" key={i} >

                            <div className='d-flex-align-center tiposBienestarStyle__container-card'>

                                <Link className='d-flex-align-center principal-color font-w-500 txtDeco ' to={`/productosBienestar/${cadaTipoEnBienestar.titulo}`}  >
                                    <img src={cadaTipoEnBienestar.foto} alt={cadaTipoEnBienestar.titulo} />
                                    <span className='font-size-20'>{cadaTipoEnBienestar.titulo} </span >

                                </Link>

                            </div>

                        </div>

                    )
                })
                }

            </div >

        </ >
    )
}

export default TipoList
