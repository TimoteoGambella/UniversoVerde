import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UseApiContext } from '../../context/ApiContext'

const HomeAromas = () => {

    const { aromas, searchCollections, mayPrimera } = useContext(UseApiContext)

    const [homeAroma, setHomeAroma] = useState([])

    let losDestacados = []

    useEffect(() => {

        aromas.length === 0 && searchCollections("tipos-aromas", "aromas")

        let numero = Math.floor((Math.random() * 2) + 0);

        if (aromas.length !== 0) {

            for (let i = 0; i < 3; i++) {

                for (const key in aromas) {

                    if (aromas[key] === aromas[numero + i]) {

                        losDestacados.push(aromas[key])
                        setHomeAroma(losDestacados)
                    }
                }
            }
        }
    }, [aromas])

    return (
        <div className='w-90 padd-top-25'>

            <h5 className='homeContainer__accesos-itemTitle font-w-400 font-size-14'>Aromas...</h5>
            <div className='d-flex-center homeContainer__items-homeItem'>
                {
                    homeAroma.map((cada, i) => {
                        return (

                            <Fragment key={i}>
                                <Link className='txtDeco d-flex-column homeContainer__items-homeItem--link' to={`/aromas/Aroma/${(cada.tipo).toLowerCase()}`}  >
                                    <img src={cada.foto} alt={cada.tipo} />
                                    <span className='font-w-500 principal-color font-size-14 homeContainer__items-homeItem--link---txt'>{mayPrimera(cada.tipo.toLowerCase())}</span>
                                </Link>
                            </Fragment>
                            
                        )
                    })
                }
            </div>

        </div>
    )
}

export default HomeAromas