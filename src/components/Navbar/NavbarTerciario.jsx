import React from 'react'
import { Link } from 'react-router-dom'


const NavbarTerciario = () => {

    return (
        <div className='bgColor w-100 d-flex-row navbarContainer'>

            <div className="navbarContainer__titulos">
                <Link to="/">
                    <img src="/assets/menu-izq.png" alt="iconoMenu" />
                </Link>
            </div>
        </div>
    )
}

export default NavbarTerciario
