import React, { useContext } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import { UseApiContext } from '../../context/ApiContext';
import GenerateOrderObject from '../../services/GenerateOrderObject';


const ConfirmModal = ({ confirmVisibility, setConfirmVisibility, setGraciasCompra }) => {

    const { user, setUser, actionToFavsOrCart, addOrder, mayPrimera } = useContext(UseApiContext)

    const clearCart = () => {
        let clearArray = []
        setUser({ ...user, carrito: clearArray })
        actionToFavsOrCart(user.id, '', clearArray, "carrito")
        localStorage.setItem(`USUARIO LOGUEADO`, JSON.stringify({ ...user, carrito: clearArray }))
    }

    const corfirmPurchase = async () => {

        try {
            const order = GenerateOrderObject({
                id: user.id,
                nombreApe: user.nombreApellido,
                mail: user.mail,
                cart: user.carrito
            })

            setConfirmVisibility(true)

            addOrder(order)

            clearCart()

            setGraciasCompra(true)

        } catch (error) {
            console.log(error);
        } finally {
            setConfirmVisibility(false)
        }
    }

    const {
        handleSubmit,
        formState: { errors }
    } = useForm();

    const handleClose = () => {
        setConfirmVisibility(false)
    }

    return (
        <>
            <Modal className='modal-content-mg-top '
                show={confirmVisibility}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <form onSubmit={handleSubmit(corfirmPurchase)}>

                    <Modal.Header>
                        <h4>Hola {mayPrimera(user.nombreApellido)}!</h4>
                    </Modal.Header>

                    <Modal.Body className='modalBody'>
                        <span>Usuario logueado: <b>{user.mail}</b></span>
                        <h6 className='txtModal'>Productos en el carrito:</h6>
                        {
                            user.carrito.map((cadaProducto, i) => {
                                return (
                                    <div className=' br-16 shadow-025 w-100 modalComprar' key={i}>

                                        <div className="d-flex-align-center br-13 modalComprar__container">

                                            <div className='d-flex-align-center'>

                                                <img src={cadaProducto.fotoAroma} alt={cadaProducto.nombreProducto + " sabor " + cadaProducto.nombreAroma} />

                                                <div className="d-flex-col-le cart__container-item-container-txt">
                                                    <span className='font-w-500'>{mayPrimera(cadaProducto.nombreProducto)}</span>
                                                    <span>{mayPrimera(cadaProducto.nombreAroma)}</span>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }


                    </Modal.Body>

                    <Modal.Footer className='recuperarContrasena__footer'>

                        <span className='d-flex-column'>Deseas confirmar la compra?</span>

                        <div className='d-flex-align-center'>
                            <div className='recuperarContrasena__footer-cancel' onClick={handleClose}>Cancelar</div>
                            <input className='principal-color' type="submit" value="Aceptar" />
                        </div>


                    </Modal.Footer>

                </form>
            </Modal>
        </>
    );

}

export default ConfirmModal