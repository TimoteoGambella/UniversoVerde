import React from 'react'
import { Link } from 'react-router-dom'
import SubtituloProductosBienestar from '../SubtituloProductosBienestar/SubtituloProductosBienestar'
import SubtituloTipoAroma from '../SubtituloTipoAroma/SubtituloTipoAroma'

const TipoAroma = ({ cadaAroma, guardo, descripcion }) => {

    return (

        <div>
            <SubtituloTipoAroma guardo={guardo} descripcion={descripcion} />
            <div className='full w-100 d-flex-column bg-gradient-large tiposBienestarStyle'>

                {cadaAroma.map((elAroma, i) => {
                    return (

                        <div className="tiposBienestarStyle__container br-16" key={i} >

                            <div className='d-flex-align-center tiposBienestarStyle__container-card'>

                                <Link className='d-flex-align-center principal-color font-w-500 txtDeco ' to={`/aromas/${guardo.titulo}/${elAroma.tipo.toLowerCase()}`}  >
                                    <img src={elAroma.foto} alt="aroma" />
                                    <span className='font-size-20'>{elAroma.tipo.toUpperCase()}</span>
                                </Link>

                            </div>

                        </div>

                    )
                }
                )
                }

            </div>
        </div>
    )
}

export default TipoAroma