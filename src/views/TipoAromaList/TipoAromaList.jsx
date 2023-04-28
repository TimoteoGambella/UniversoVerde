import React, { useContext, useEffect, useState } from 'react'
import TipoAroma from '../../components/TipoAroma/TipoAroma'
import { UseApiContext } from '../../context/ApiContext'
import NavbarSecundario from '../../components/Navbar/NavbarSecundario'
import { useParams } from 'react-router-dom'
import FooterFav from '../../components/Footer/FooterFav'
import Proximamente from '../../components/Proximamente/Proximamente'

const TipoAromaList = () => {

    const { tiposAromasId } = useParams()
    const { searchCollections, aromas, tipo, guardoProducto, descripcion, traigoTituloProductos } = useContext(UseApiContext)
    const [muestro, setMuestro] = useState(false)

    useEffect(() => {

        aromas.length === 0 && searchCollections("tipos-aromas", "aromas")

        traigoTituloProductos(tipo, tiposAromasId, "paraAroma")

        if (tiposAromasId.toLowerCase() === "velas de soja" || tiposAromasId.toLowerCase() === "incienso") {
            setMuestro(true)
        }

    }, [tipo])

    return (
        <div>

            <NavbarSecundario tituloId={tiposAromasId} />
            {
                muestro ?
                    <TipoAroma cadaAroma={aromas} guardo={guardoProducto} descripcion={descripcion} />
                    :
                    <Proximamente />
            }
            <FooterFav tituloId={tiposAromasId} />

        </div>
    )
}

export default TipoAromaList