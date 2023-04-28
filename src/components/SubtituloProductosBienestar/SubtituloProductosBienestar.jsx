import React from 'react'

const SubtituloProductosBienestar = ({ productoBien }) => {
    return (

        <div className="d-flex-align-center subtituloProductosBienestar">

            <img src={productoBien.foto} alt={productoBien.titulo} />
            <div className="d-flex-column-center subtituloProductosBienestar__txt ">
                <span className='font-w-500 font-size-20'>{productoBien.titulo}</span>
                <span className='font-size-14 subtituloProductosBienestar__txt-txtDescripcion'>{productoBien.descripcion}</span>
            </div>
            
        </div>

    )
}

export default SubtituloProductosBienestar
