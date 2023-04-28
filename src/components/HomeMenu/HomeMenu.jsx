import React from 'react'
import { Link } from 'react-router-dom'

const HomeMenu = () => {
    return (
        <section className='homeContainer__content shadow-025'>

            <img className='d-flex-center' src="assets/banner-principal.png" alt="bannerPrincipal" />

            <div className="d-flex-row font-w-400 font-size-14 homeContainer__content-menu">

                <Link to="/section/Sve1HEDRECaxquAjcoOi" className="d-flex-column-center principal-color txtLink">
                    <img src="assets/sublogo-1.png" alt="menuBienestar" />
                    Bienestar
                </Link>

                <Link to="/section/cabello" className="d-flex-column-center principal-color homeContainer__container-menu">
                    <img src="assets/sublogo-2.png" alt="menuCabello" />
                    Cabello
                </Link>

                <Link to="/section/hogar" className="d-flex-column-center principal-color homeContainer__container-menu">
                    <img src="assets/sublogo-3.png" alt="menuHogar" />
                    Hogar
                </Link>

                <Link to="/section/cuerpo" className="d-flex-column-center principal-color homeContainer__container-menu">
                    <img src="assets/sublogo-4.png" alt="menuCuerpo" />
                    Cuerpo
                </Link>

            </div>
        </section >
    )
}

export default HomeMenu
