
import React, { useContext } from 'react'
import { UseApiContext } from '../../context/ApiContext'

const BackButton = ({ titulo }) => {

    const back = () => {
        window.history.back()
    }

    const { mayPrimera } = useContext(UseApiContext)

    return (
        <div className="navbarContainer__titulos">

            <div onClick={back}>

                <div className="d-flex-center font-size-14 "  >
                    <img src="/assets/arrow-back.png" alt="backArrow" />
                    <span>{mayPrimera(titulo)}</span>
                </div>

            </div>

        </div>
    )
}

export default BackButton
