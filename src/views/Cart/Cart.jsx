import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FooterFav from '../../components/Footer/FooterFav'
import NavbarSecundario from '../../components/Navbar/NavbarSecundario'
import { UseApiContext } from '../../context/ApiContext'
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal'
import CompraRealizada from '../../components/CompraRealizada/CompraRealizada'
import CartSinProductos from '../../components/CartSinProductos/CartSinProductos'
import CartList from '../../components/CartList/CartList'


const Cart = () => {

    const { cartId } = useParams()
    const { user } = useContext(UseApiContext)
    const [carritoUser, setCarritoUser] = useState([])
    const [confirmVisibility, setConfirmVisibility] = useState(false)
    const [graciasCompra, setGraciasCompra] = useState(false)

    useEffect(() => {

        if (user.id !== undefined) {
            setCarritoUser(user.carrito)
        }

    }, [user])

    return (
        <>
            {
                graciasCompra ?
                    <CompraRealizada />
                    :
                    <>
                        <NavbarSecundario tituloId={cartId} />
                        <div className='cartFavSinProductos'>
                            {
                                carritoUser.length === 0 ?
                                    <CartSinProductos />
                                    :
                                    <CartList
                                        carritoUser={carritoUser}
                                        setConfirmVisibility={setConfirmVisibility} />

                            }
                            {
                                confirmVisibility ?
                                    <ConfirmModal
                                        confirmVisibility={confirmVisibility}
                                        setConfirmVisibility={setConfirmVisibility}
                                        setGraciasCompra={setGraciasCompra}
                                    />
                                    :
                                    null
                            }
                        </div>
                        <FooterFav tituloId={cartId} />
                    </>
            }
        </ >
    )
}

export default Cart
