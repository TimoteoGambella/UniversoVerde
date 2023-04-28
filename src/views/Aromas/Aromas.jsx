import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UseApiContext } from '../../context/ApiContext'
import Loading from '../../components/Loading/Loading'
import NavbarSecundario from '../../components/Navbar/NavbarSecundario'
import FooterFav from '../../components/Footer/FooterFav'
import BotonEnviar from '../../components/BotonEnviar/BotonEnviar'

const Aromas = () => {

    const { productoId, aromaId } = useParams()
    const { aromas, searchCollections, } = useContext(UseApiContext)
    const [primeraPalabra, setPrimeraPalabra] = useState('')

    useEffect(() => {

        aromas.length === 0 && searchCollections("tipos-aromas", "aromas")

        setPrimeraPalabra(productoId)

    }, [])

    return (
        <>
            {
                aromas.length === 0 ?

                    <Loading />
                    :
                    <>
                        {
                            aromas.map((elAroma, i) => {
                                return (

                                    <Fragment key={i}>
                                        {elAroma.tipo.toLowerCase() === aromaId &&

                                            <>

                                                <NavbarSecundario tituloId={aromaId} />
                                                <div className='w-100 h-100 aromasStyle__container' key={i} >

                                                    <div className="bg-gradient-small d-flex-center aromasStyle__container-img">
                                                        <img src={elAroma.foto} alt={primeraPalabra + "sabor" + elAroma.tipo.toLowerCase()} />
                                                    </div>

                                                    <div className="aromasStyle__container-txt">
                                                        <h5 className='font-w-400 font-size-16'>{primeraPalabra} sabor {elAroma.tipo.toLowerCase()}</h5>
                                                        <span className='font-size-14'>Beneficios:<br />{elAroma.descripcion}</span>
                                                    </div>

                                                    <BotonEnviar
                                                        nombreProducto={productoId.toLowerCase()}
                                                        nombreAroma={elAroma.tipo.toLowerCase()}
                                                        fotoAroma={elAroma.foto}
                                                        primeraPalabra={primeraPalabra}
                                                    />

                                                </div>

                                                <FooterFav tituloId={aromaId} />

                                            </>

                                        }
                                    </Fragment>

                                )
                            })
                        }
                    </>

            }
        </>
    )
}

export default Aromas