import React from 'react'
import { Link } from 'react-router-dom'

//BIENESTAR FISICO O EMOCIONAL
const Bienestar = ({ bienestarFisOEmo }) => {

    const tiposBienestar = bienestarFisOEmo["tipo-bienestar"]

    return (
        <div className='full bg-gradient-large w-100  d-flex-column bienestarListStyle'>

            {
                tiposBienestar.map((cadaTipo, i) => {
                    return (
                        <div className="br-16 bienestarListStyle__container" key={i}>

                            <div className='d-flex-column-center bienestarListStyle__container-card ' key={i} >

                                <Link className='txtDeco d-flex-column w-100' to={`/tipoBienestar/${cadaTipo.titulo}`}>
                                    <img src={cadaTipo.foto} alt={cadaTipo.titulo} />
                                    <span className='principal-color font-size-16 bienestarListStyle__container-card-txt'>{cadaTipo.titulo}</span>
                                </Link>

                            </div>

                        </div>
                    )
                })
            }
        </div >
    )
}

export default Bienestar
