import React, { Fragment, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import TipoList from '../../components/TipoList/TipoList'
import { UseApiContext } from '../../context/ApiContext'
import Proximamente from '../../components/Proximamente/Proximamente'
import NavbarSecundario from '../../components/Navbar/NavbarSecundario'
import FooterFav from '../../components/Footer/FooterFav'

const TipoBienestar = () => {

    const { tipoBienestarId } = useParams()
    const { buscarObjetoValor, tipo } = useContext(UseApiContext)

    useEffect(() => {
        tipo.length === 0 && buscarObjetoValor("tipo-bienestar", "0", "tipos")
    }, [buscarObjetoValor])

    return (
        <div className='h-100'>
            <NavbarSecundario tituloId={tipoBienestarId} />
            <div >

                {
                    tipoBienestarId === "Bienestar Físico" ?
                        <TipoList tiposEnBienestares={tipo} tipoBienestarId={tipoBienestarId} />
                        :
                        <Proximamente />
                }
            </div>
            <FooterFav tituloId={tipoBienestarId} />
        </div>
    )
}

export default TipoBienestar
