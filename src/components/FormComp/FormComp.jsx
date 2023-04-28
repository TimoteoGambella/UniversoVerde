import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UseApiContext } from '../../context/ApiContext';
import Modal from 'react-bootstrap/Modal';

const FormComp = ({ mailUsuario }) => {

    const { registroTrueFalse, setRegistroTrueFalse, corfirmarReg } = useContext(UseApiContext)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {

        corfirmarReg(data)
        setRegistroTrueFalse(false)

    };

    return (
        <>
            <Modal className='modal-content-mg-top '
                show={registroTrueFalse}
                backdrop="static"
                keyboard={false}
            >
                <form className='modal-content-mg-top' onSubmit={handleSubmit(onSubmit)}>

                    <Modal.Header >
                        <Modal.Title>Registrate</Modal.Title>
                    </Modal.Header>

                    <Modal.Body className='recuperarContrasena__container'>

                        <input defaultValue={mailUsuario} {...register("mail", { required: true, minLength: 2, })} />
                        {errors?.mail?.type === "required" && <p>Ingrese mail</p>}
                        {errors?.mail?.type === "minLength" && (<p>Debe tener almenos dos caracteres.</p>)}

                        <input placeholder='Nombre y Apellido' {...register("nombreApellido", { required: true, minLength: 2, })} />
                        {errors?.nombreApellido?.type === "required" && <p>Ingrese nombre</p>}
                        {errors?.nombreApellido?.type === "minLength" && (<p>Debe tener almenos dos caracteres.</p>)}

                        <input type="password" placeholder='Contraseña' {...register("contrasena", { required: true, minLength: 2, })} />
                        {errors?.contrasena?.type === "required" && <p>Ingrese contraseña</p>}
                        {errors?.contrasena?.type === "minLength" && (<p>Debe tener almenos dos caracteres.</p>)}

                    </Modal.Body>

                    <Modal.Footer className='recuperarContrasena__footer'>

                        <div className='recuperarContrasena__footer-cancel' onClick={() => { setRegistroTrueFalse(false) }}>Cancelar</div>
                        <input className='principal-color' type="submit" value="Confirmar" />

                    </Modal.Footer>

                </form>
            </Modal>
        </>
    );



}

export default FormComp