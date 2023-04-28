import React from 'react'

const SubtituloTipoBienestar = ({ sectionId, tituloFisico, tipoBienestarId }) => {
    return (

        <div className="d-flex-align-center w-100 subtituloBienestar">

            <img src="/assets/sublogo-1.png" alt="logo" />
            {
                sectionId === 'cuerpo' ?
                    <span>{tituloFisico}</span>
                    :
                    <span>{tipoBienestarId}</span>
            }

        </div>
        
    )
}

export default SubtituloTipoBienestar
