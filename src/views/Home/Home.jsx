import React from 'react'
import FooterFav from "../../components/Footer/FooterFav";
import HomeAromas from '../../components/HomeAromas/HomeAromas';
import HomeMasBuscados from '../../components/HomeMasBuscados/HomeMasBuscados';
import HomeMenu from '../../components/HomeMenu/HomeMenu';
import HomeProductos from '../../components/HomeProductos/HomeProductos';
import NavbarPrincipal from '../../components/Navbar/NavbarPrincipal';

const Home = () => {

    return (
        <>

            <NavbarPrincipal />

            <div className=' bg-gradient-large'>
                <div className='d-flex-column-center h-100 w-100 homeContainer'>

                    <HomeMenu />

                    <section className='w-100 homeContainer__accesos'>

                        <HomeMasBuscados />
                        <HomeProductos />
                        <HomeAromas />

                    </section>

                </div>
            </div>
            
            < FooterFav />
        </>
    )
}

export default Home