import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UseApiContext } from '../../context/ApiContext';


const NavbarPrincipal = () => {

    const { user } = useContext(UseApiContext)

    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {

        if (user.id === undefined) {
            setIsLogged(false)
        } else {
            setIsLogged(true)
        }

    }, [user])



    return (
        <div className='bgColor w-100 d-flex-row navbarContainer'>

            <div className="navbarContainer__logo">
                <Link to="/">
                    <img src="/assets/logo.png" alt="logoUniverso" />
                </Link>
            </div>

            <div className="navbarContainer__favcart">
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
            </div>
        </div>
    )
}

export default NavbarPrincipal
