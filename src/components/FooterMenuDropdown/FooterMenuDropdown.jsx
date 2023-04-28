import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { Link } from 'react-router-dom';

const FooterMenuDropdown = () => {

    const [dropdown, setDropdown] = useState(false)

    const abrirCerrarDropdown = () => {
        setDropdown(!dropdown)
    }

    return (
        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} direction="up">

            <DropdownToggle className='footerContainer__footer-footerDropDown'>
                <img src="/assets/menu-izq.png" alt="footerMenu" />
            </DropdownToggle>

            <DropdownMenu className='footerContainer__footer-footerDropDown'>

                <DropdownItem >
                    <Link className='principal-color txtDeco' to="/section/Sve1HEDRECaxquAjcoOi">Bienestar</Link>
                </DropdownItem>

                <DropdownItem>
                    <Link className='principal-color txtDeco' to="/section/cabello">Cabello</Link>
                </DropdownItem>

                <DropdownItem>
                    <Link className='principal-color txtDeco' to="/section/hogar">Hogar</Link>
                </DropdownItem>

                <DropdownItem>
                    <Link className='principal-color txtDeco' to="/section/cuerpo">Cuerpo</Link>
                </DropdownItem>
                
                <DropdownItem>
                    <Link className='principal-color txtDeco' to="/">Inicio</Link>
                </DropdownItem>

            </DropdownMenu>

        </Dropdown>
    )
}

export default FooterMenuDropdown