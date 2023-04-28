import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { UseApiContext } from '../../context/ApiContext';
import MailContrasena from '../MailContrasena/MailContrasena';
import AuthGoogle from '../AuthGoogle/AuthGoogle';
import AuthFacebook from '../AuthFacebook/AuthFacebook';




const LoginForm = () => {

    const { coincideMailPass, corfirmarReg, googleFaceRegistro } = useContext(UseApiContext)


    const [recuperarContrasena, setRecuperarContrasena] = useState(false)

    const [googleUser, setGoogleUser] = useState([])
    const [facebookUser, setFacebookUser] = useState([])


    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {

        const loginValues = getValues("LoginName")
        const passValue = getValues("password")

        coincideMailPass(loginValues, passValue, "")
    };


    useEffect(() => {

        if (googleUser.length !== 0) {

            coincideMailPass(googleUser.email, googleUser.googleId, "google")


            if (googleFaceRegistro === true) {

                const data = {
                    nombreApellido: googleUser.name,
                    mail: googleUser.email,
                    contrasena: googleUser.googleId,
                }

                corfirmarReg(data)
            }
        }


        if (facebookUser.length !== 0) {

            coincideMailPass(facebookUser.email, facebookUser.id, "facebook")

 
            if (googleFaceRegistro === true) {

                const data = {
                    nombreApellido: facebookUser.name,
                    mail: facebookUser.email,
                    contrasena: facebookUser.id,
                }

                corfirmarReg(data)
            }
        }


    }, [googleUser, googleFaceRegistro, facebookUser])



    return (
        <div className='full' >

            <div className="font-w-500 tituloSesion">
                Iniciar sesión
            </div>

            <form className='d-flex-column-center d-flex-column-center loginForm' onSubmit={handleSubmit(onSubmit)}>

                <div className="d-flex-column loginForm-input">
                    <input type='email' placeholder='Mail' {...register("LoginName", { required: true })} />
                    {errors?.LoginName?.type === "required" && <p>Campo incompleto.</p>}


                    <input type='password' placeholder='Contraseña' {...register("password", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors?.password?.type === "required" && <p>Campo incompleto.</p>}
                </div>


                <div className="d-flex-column font-size-14 crearRegistro">

                    <div className="d-flex-row crearRegistro-registro">

                        ¿No tienes cuenta?
                        <Link className='font-w-500 crearRegistro-registro-boton' to="/login/regist form">Registrate</Link >

                    </div>

                    <div className="crearRegistro-recuperarContrasena">
                        <button className='font-w-500 crearRegistro-recuperarContrasena-boton' onClick={() => { setRecuperarContrasena(true) }}>Recuperar contraseña</button>
                        {

                            recuperarContrasena ?
                                <MailContrasena
                                    recuperarContrasena={recuperarContrasena}
                                    setRecuperarContrasena={setRecuperarContrasena}
                                />
                                : null
                        }
                    </div>
                </div>

                <button className='principal-button d-flex-row' type="submit">
                    <img src="/assets/menu-der.png" alt="LoginIcon" />
                    INGRESAR
                </button>

            </form>

            <div className='d-flex-row redesStyle' >

                <AuthGoogle setGoogleUser={setGoogleUser} />

                <AuthFacebook setFacebookUser={setFacebookUser} />

            </div>

        </div>
    );
}

export default LoginForm