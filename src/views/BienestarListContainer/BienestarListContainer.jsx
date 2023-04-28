import React, { useContext, useEffect, useState } from 'react'
import { UseApiContext } from '../../context/ApiContext'
import BienestarList from '../../components/BienestarList/BienestarList';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import NavbarSecundario from '../../components/Navbar/NavbarSecundario';
import FooterFav from '../../components/Footer/FooterFav';
import PrimerList from '../../components/PrimeList/PrimerList';
import TipoList from '../../components/TipoList/TipoList';


const BienestarListContainer = () => {

    const { collectionByParam, product, coleccion, tipo } = useContext(UseApiContext)
    const { sectionId } = useParams()
    const [queTitulo, setQueTitulo] = useState([]) // UTILIZADO PARA LOS SUBTITULOS
    const [queMenu, setQueMenu] = useState(false) // DIRIGE A CABELLO / CABEZA

    useEffect(() => {

        for (const key in coleccion) {

            const prueba = coleccion[key]["tipo-bienestar"][0]["tipos"]

            for (const key2 in prueba) {
                const prueba2 = prueba[key2].titulo.toLowerCase();

                if (sectionId === coleccion[key].id) {
                    setQueMenu(false)

                    product.length === 0 && collectionByParam("seccion", "titulo", coleccion[key].titulo, "products")

                } else if (sectionId === prueba2) {
                    //DIRIGE A CABELLO
                    setQueMenu(true)
                    setQueTitulo(prueba[key2])

                } else if (sectionId === "hogar") {
                    //DIREIJE A CABEZA
                    setQueMenu(true)
                    setQueTitulo(tipo[key]);
                }
            }
        }

    }, [sectionId, coleccion, tipo])


    return (
        <>
            <NavbarSecundario tituloId={sectionId} />
            <div >
                {
                    coleccion.length === 0 || tipo.length === 0 ?
                        <Loading />
                        :
                        <>
                            {
                                sectionId === "cuerpo" ?
                                    <TipoList tiposEnBienestares={tipo} />
                                    :
                                    <>
                                        {
                                            queMenu ?
                                                <PrimerList tipo={queTitulo} />
                                                :
                                                <BienestarList miTipo={product} />
                                        }
                                    </>
                            }
                        </>
                }
            </div>
            <FooterFav tituloId={sectionId} />

        </>
    )
}

export default BienestarListContainer
