import React, { Fragment, useContext, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useRef } from 'react';
import { UseApiContext } from '../../context/ApiContext';
import Swal from 'sweetalert2'

const MailContrasena = ({ recuperarContrasena, setRecuperarContrasena }) => {

    const { getUserPass, emailJS } = useContext(UseApiContext)

    const form = useRef();
    const user_name = useRef()
    const user_email = useRef()
    const mailto = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        const nombre = user_name.current.value

        const mailValue = (user_email.current.value)


        const contrasenaPromise = new Promise((acce, reje) => {
            acce(getUserPass(mailValue))
        })

        contrasenaPromise
            .then((result) => {
                const contrasena = result

                const array = {
                    nombre: nombre,
                    contrasena: contrasena,
                    toMail: mailValue,
                }
                emailJS(array)
            })

        Swal.fire(
            'Contraseña enviada',
            'Revisa tu mail por favor,',
            'success'
        )
        setRecuperarContrasena(false)
    };


    return (

        <Modal className='modal-content-mg-top '
            show={recuperarContrasena}

            backdrop="static"
            keyboard={false}
        >
            <form ref={form} onSubmit={sendEmail}>

                <Modal.Header>
                    <Modal.Title>Recuperar contraseña</Modal.Title>
                </Modal.Header>

                <Modal.Body className='recuperarContrasena__container'>

                    <input type="text" placeholder='Nombre' ref={user_name} name="user_name" />
                    <input type="email" placeholder='Mail registrado' ref={user_email} name="user_email" />

                </Modal.Body>

                <Modal.Footer className='recuperarContrasena__footer'>

                    <div className='recuperarContrasena__footer-cancel' onClick={() => { setRecuperarContrasena(false) }}>Cancelar</div>
                    <input className='principal-color' type="submit" value="Enviar" />

                </Modal.Footer>

            </form>

        </Modal >
    )
}

export default MailContrasena
