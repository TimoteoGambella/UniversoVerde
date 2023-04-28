import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UseApiContext } from '../../context/ApiContext'
import FavButton from '../FavButton/FavButton'

const FavoritosList = () => {

    const { user } = useContext(UseApiContext)
    const [mostrarFavs, setMostrarFavs] = useState([])

    useEffect(() => {
        if (user.id !== undefined) {
            setMostrarFavs(user.favoritos)
        }
    }, [user])

    return (
        <div className='favoritosList__container bg-gradient-large'>
            {
                mostrarFavs.map((cadaFavorito, i) => {
                    return (
                        <div key={i}>

                            <div className='d-flex-column-center br-13 productCard__container'>

                                <div className="productCard__container-favIconStyle">
                                    <FavButton queProducto={cadaFavorito} />
                                </div>

                                <Link className='principal-color font-w-500 txtDeco font-size-20 d-flex-column-center productCard__container-link' to={`/tiposAromas/${cadaFavorito.titulo}`}  >

                                    <img className='br-13' src={cadaFavorito.foto} alt={cadaFavorito.titulo} />
                                    <span>{cadaFavorito.titulo}</span>

                                </Link>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FavoritosList
