import React from 'react'

const SubtituloTipoAroma = ({ guardo, descripcion }) => {
    return (
        <div className='d-flex-align-center subtituloProductosBienestar'>

            <img src={guardo.foto} alt={guardo.titulo} />
            <div className="d-flex-column-center subtituloProductosBienestar__txt ">
                <span className='font-w-500 font-size-20'>{guardo.titulo}</span>
                <span className='font-size-14 subtituloProductosBienestar__txt-txtDescripcion'>{descripcion}</span>
            </div>

        </div>
    )
}

export default SubtituloTipoAroma
