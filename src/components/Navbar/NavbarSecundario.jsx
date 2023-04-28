import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UseApiContext } from '../../context/ApiContext'
import BackButton from '../BackButton/BackButton'


const NavbarSecundario = ({ tituloId }) => {

    const { coleccion, user } = useContext(UseApiContext)
    const [isLogged, setIsLogged] = useState(false)


    const [titulo, setTitulo] = useState('')


    useEffect(() => {

        if (user.id === undefined) {
            setIsLogged(false)
        } else {
            setIsLogged(true)
        }

        if (coleccion.length !== 0) {

            tituloId === coleccion[0].id ?
                setTitulo(coleccion[0].titulo)
                :
                setTitulo(tituloId)
        }
    }, [tituloId, coleccion, user])


    return (
        <div className='bgColor w-100 d-flex-row navbarContainer'>

            <BackButton titulo={titulo} />



            <div className="navbarContainer__favcart">
                {
                    titulo !== "Login form" ?
                        <>
                            {
                                isLogged ?
                                    <>
                                        <Link to="/favoritos/Favoritos">
                                            <img src="/assets/favoritos.png" className='navbarContainer__favcart-favIcon' alt="favIcon" />
                                        </Link>

                                        <Link to="/cart/Cart">
                                            <img src="/assets/cart.png" className='navbarContainer__favcart-cartIcon' alt="cartIcon" />
                                        </Link>
                                    </>
                                    :
                                    <>
                                        <Link to="/login/Login form">
                                            <img src="/assets/favoritos.png" className='navbarContainer__favcart-favIcon' alt="favIcon" />
                                        </Link>

                                        <Link to="/login/Login form">
                                            <img src="/assets/cart.png" className='navbarContainer__favcart-cartIcon' alt="cartIcon" />
                                        </Link>
                                    </>
                            }
                        </>
                        :
                        null
                }
            </div>
        </div>
    )
}

export default NavbarSecundario
