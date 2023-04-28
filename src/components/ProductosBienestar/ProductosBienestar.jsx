import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import Productos from '../Productos/Productos'
import SubtituloProductosBienestar from '../SubtituloProductosBienestar/SubtituloProductosBienestar'

const ProductosBienestar = ({ productosEnBienestar }) => {


    const { productosBienestarId } = useParams()

    return (
        <div>

            <div className='w-100'>
                {productosEnBienestar.map((productoBien, i) => {

                    return (

                        productosBienestarId === productoBien.titulo ?
                            <Fragment key={i}>

                                <SubtituloProductosBienestar productoBien={productoBien} />
                                <div className='full w-100 bienestarListStyle'>
                                    <Productos cadaProductoBien={productoBien["productos"]} />
                                </div>

                            </Fragment>
                            :
                            null

                    )
                })
                }
            </div>
        </div>
    )
}

export default ProductosBienestar