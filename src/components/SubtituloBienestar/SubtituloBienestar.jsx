import React from 'react'

const SubtituloBienestar = ({ elTipo }) => {
    return (

        <div className="d-flex-align-center subtituloBienestar">
            <img src="/assets/sublogo-1.png" alt={elTipo.titulo} />
            <span>{elTipo.titulo}</span>
        </div>
        
    )
}

export default SubtituloBienestar
