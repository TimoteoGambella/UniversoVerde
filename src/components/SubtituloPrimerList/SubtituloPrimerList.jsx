import React from 'react'

const SubtituloPrimerList = ({ tipo }) => {
    return (

        <div className="d-flex-align-center subtituloProductosBienestar">

            <img src={tipo.foto} alt={tipo.titulo} />
            <div className="d-flex-column-center subtituloProductosBienestar__txt ">

                <span className='font-w-500 font-size-20'>{tipo.titulo}</span>
                <span className='font-size-14 subtituloProductosBienestar__txt-txtDescripcion'>{tipo.descripcion}</span>

            </div>
        </div>
        
    )
}

export default SubtituloPrimerList
