import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FooterMenuDropdown from '../FooterMenuDropdown/FooterMenuDropdown';
import { UseApiContext } from '../../context/ApiContext';


const FooterFav = ({ tituloId }) => {

    const { user } = useContext(UseApiContext)
    const [isLogged, setIsLogged] = useState(false)


    const [favOrHome, setFavOrHome] = useState(false)

    useEffect(() => {

        if (user.id === undefined) {
            setIsLogged(false)
        } else {
            setIsLogged(true)
        }


        tituloId === undefined ?
            setFavOrHome(true)
            :
            setFavOrHome(false)

    }, [tituloId, user])

    return (
        <div className="footerContainer">

            <div className='bgColor d-flex-center footerContainer__footer'>

                <FooterMenuDropdown />
                {
                    favOrHome ?
                        <>
                            {
                                isLogged?
                                    <Link to="/favoritos/Favoritos" >
                                        <img src="/assets/favoritos.png" alt="footerFav" />
                                    </Link>
                                    :
                                    <Link to="/login/Login form" >
                                        <img src="/assets/favoritos.png" alt="footerFav" />
                                    </Link>
                            }
                        </>
                        :
                        <Link to='/'>
                            <img src="/assets/menu-mid.png" alt="footerHome" />
                        </Link>
                }
                <Link to='/login/Login form'>
                    <img src="/assets/menu-der.png" alt="footerUsuario" />
                </Link>

            </div>

        </div>
    )
}

export default FooterFav