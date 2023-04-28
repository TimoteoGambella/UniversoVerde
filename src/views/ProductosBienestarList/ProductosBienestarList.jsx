import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import FooterFav from '../../components/Footer/FooterFav'
import NavbarSecundario from '../../components/Navbar/NavbarSecundario'
import ProductosBienestar from '../../components/ProductosBienestar/ProductosBienestar'
import { UseApiContext } from '../../context/ApiContext'

const ProductosBienestarList = () => {

    const { productosBienestarId } = useParams()
    const { tipo } = useContext(UseApiContext)

    return (
        <div className='w-100 h-100 '>
            
            <NavbarSecundario tituloId={productosBienestarId} />
            <ProductosBienestar productosEnBienestar={tipo} />
            <FooterFav tituloId={productosBienestarId} />

        </div>
    )
}

export default ProductosBienestarList