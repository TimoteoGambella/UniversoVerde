import React, { useContext } from 'react'
import { MdRemoveCircle } from "react-icons/md"
import { UseApiContext } from '../../context/ApiContext'


const CartList = ({ carritoUser, setConfirmVisibility }) => {

    const { mayPrimera, quitarProducto } = useContext(UseApiContext)

    return (
        <div className='d-flex-column-center h-100 cart bg-gradient-large'>

            <div className="cart__container">
                {
                    carritoUser.map((ele, i) => {
                        return (
                            <div className=' br-16 shadow-025 cart__container-item' key={i}>

                                <div className="d-flex-center br-13 cart__container-item-container">
                                    <div className='d-flex-center'>

                                        <img src={ele.fotoAroma} alt={ele.nombreProducto + " " + ele.nombreAroma} />

                                        <div className="d-flex-col-le cart__container-item-container-txt">
                                            <span className='font-w-500'>{mayPrimera(ele.nombreProducto)}</span>
                                            <span>{mayPrimera(ele.nombreAroma)}</span>
                                        </div>

                                    </div>
                                    <button className='favButtonStyle bgColor' onClick={() => { quitarProducto(ele) }} ><MdRemoveCircle /></button>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
            <button className='principal-button cart-button' onClick={() => setConfirmVisibility(true)} >COMPRAR</button>

        </div>
    )
}

export default CartList
