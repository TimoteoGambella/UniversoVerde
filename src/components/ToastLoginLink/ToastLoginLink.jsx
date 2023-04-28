import React from 'react'
import { Link } from 'react-router-dom'

const ToastLoginLink = () => {
    return (
        <div>
            <Link className='txtDeco principal-color' to='/login/Login form'>Para poder agregar al carrito, o favoritos, debe REGISTRARSE.</Link>
        </div>
    )
}

export default ToastLoginLink