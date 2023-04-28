import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'
import RegistForm from '../../components/RegistForm/RegistForm'
import NavbarSecundario from '../../components/Navbar/NavbarSecundario';
import FooterFav from '../../components/Footer/FooterFav';
import { UseApiContext } from '../../context/ApiContext';


const LoginContainer = () => {

    const { loginId } = useParams()
    const { alguienLogueado, logOut, user } = useContext(UseApiContext)
    const [loginOrReg, setLoginOrReg] = useState(true)


    useEffect(() => {

        if (loginId === "loginContainer") {
            setLoginOrReg(true)

        } else if (loginId === "regist form") {
            setLoginOrReg(false)

        }

    }, [loginId, loginOrReg])


    const paraLogOut = () => {
        logOut()
    }

    return (

        <div className='login'>

            <NavbarSecundario tituloId={loginId} />
            <div className='d-flex-column w-100 h-100 login__container' >

                <img src="/assets/loginLogo.png" alt="logo" />
                <div className="login__container-formulario h-100">

                    {
                        user.id !== undefined ?

                            <div className='d-flex-column-center' >
                                <h2>Hola {user.nombreApellido} !</h2>
                                <h5>YA ESTAS REGISTRADO!</h5>
                                <button className='principal-button logOutButton' onClick={paraLogOut}>LOG OUT</button>
                            </div>
                            :
                            <>
                                {
                                    loginOrReg ?
                                        <LoginForm />
                                        :
                                        <RegistForm />
                                }
                            </>
                    }

                </div >
            </div>
            <FooterFav tituloId={loginId} />

        </div>

    )
}

export default LoginContainer