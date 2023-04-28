import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FavoritosList from '../../components/FavoritosList/FavoritosList'
import FavoritoSinProducto from '../../components/FavoritosSinProducto/FavoritoSinProducto'
import FooterFav from '../../components/Footer/FooterFav'
import NavbarSecundario from '../../components/Navbar/NavbarSecundario'
import { UseApiContext } from '../../context/ApiContext'

const Favoritos = () => {

    const { favoritosId } = useParams()
    const { user } = useContext(UseApiContext)
    const [favVacio, setFavVacio] = useState(false)

    useEffect(() => {

        if (user.id !== undefined) {

            setFavVacio(true)

            if (user.favoritos.length === 0) {
                setFavVacio(false)
            }

        } else {
            setFavVacio(false)
        }

    }, [user])

    return (
        <div className='h-100' >

            <NavbarSecundario tituloId={favoritosId} />

            <div className='cartFavSinProductos'>

                {
                    favVacio ?
                        <FavoritosList />
                        :
                        <FavoritoSinProducto />
                }

            </div>

            <FooterFav tituloId={favoritosId} />


        </div>
    )
}

export default Favoritos