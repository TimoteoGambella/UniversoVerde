import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UseApiContext } from '../../context/ApiContext';
// import GenerateNewUser from '../../services/GenerateNewUser';
// import Swal from 'sweetalert2'
import FormComp from '../FormComp/FormComp';




const RegistForm = () => {

    const { registroTrueFalse, estaRegistrado } = useContext(UseApiContext)
    const [mailUsuario, setMailUsuario] = useState('')

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm();

    const onSubmit = () => {

        const mailIngresado = getValues("mail")

        setMailUsuario(mailIngresado)

        estaRegistrado(mailIngresado)

    };


    return (
        <div className='d-flex-column registForm__Container'>

            <div className="font-w-500 registForm__Container-titulo">
                Registrate
            </div>

            <form className='d-flex-column-center registForm__Container-form' onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="d-flex-column">
                    <input type='email' placeholder='mail@gmail.com' {...register("mail", { required: true })} />
                    {errors?.mail?.type === "required" && <p>Campo obligatorio</p>}
                </div>

                <button className='principal-button d-flex-row registForm__Container-form' type="submit">
                    <img src="/assets/menu-der.png" alt="LoginIcon" />
                    AVANZAR
                </button>
            </form>

            <div className="formCompStyle">
                {
                    registroTrueFalse ?
                        <FormComp
                            mailUsuario={mailUsuario}
                        />
                        :
                        null
                }
            </div>
        </div>
    )
}

export default RegistForm