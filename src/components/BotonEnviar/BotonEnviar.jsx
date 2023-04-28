import React, { useContext, useEffect, useState } from 'react'
import { UseApiContext } from '../../context/ApiContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastLoginLink from '../ToastLoginLink/ToastLoginLink';



const BotonEnviar = ({ nombreProducto, nombreAroma, fotoAroma, primeraPalabra }) => {

    const { actionToFavsOrCart, user, setUser, mayPrimera } = useContext(UseApiContext)

    const [yaEnCarrito, setYaEnCarrito] = useState(false)

    const productoCompleto = {
        nombreProducto: nombreProducto,
        nombreAroma: nombreAroma,
        fotoAroma: fotoAroma
    }

    useEffect(() => {

        if (user.id !== undefined) {
            const repiteProducto = user.carrito.find(prod =>
                JSON.stringify(prod) === JSON.stringify(productoCompleto)
            )

            if (repiteProducto !== undefined) {
                repiteProducto.length !== 0 && setYaEnCarrito(true);
            }
        }
    }, [user])

    const tostamos = () => {
        toast.warning(ToastLoginLink, { autoClose: 3000 })
    }

    const enviadoAlCarrito = () => {
        toast.success(`${mayPrimera(productoCompleto.nombreProducto)}` + " sabor " + `${productoCompleto.nombreAroma} enviado al carrito`, { autoClose: 3000 })
    }

    const guardo = () => {

        if (user.id === undefined) {
            tostamos()
        } else {

            let newArray = []
            newArray = user.carrito

            if (yaEnCarrito === false) {

                newArray.push(productoCompleto)
                enviadoAlCarrito()

            }

            setUser({ ...user, carrito: newArray })

            actionToFavsOrCart(user.id, '', newArray, "carrito")

            localStorage.setItem(`USUARIO LOGUEADO`, JSON.stringify({ ...user, carrito: newArray }))
        }
    }

    return (
        <>
            {
                primeraPalabra !== "Aroma" ?
                    <div className='d-flex-column'>
                        {
                            yaEnCarrito ?
                                <>
                                    < button className='principal-button d-flex-center bgColorEsta botonAceptar'>

                                        <span>Ya esta en el carrito</span>

                                    </button>
                                </>
                                :
                                <>
                                    <button onClick={guardo} className='principal-button d-flex-center botonAceptar'>

                                        <img src="/assets/plusCart.png" alt="agregar carrito" />
                                        <span>Agregar al carrito</span>

                                    </button>
                                </>
                        }

                    </div>
                    :
                    null}
            <ToastContainer className="mar-top-25" />
        </>
    )
}

export default BotonEnviar