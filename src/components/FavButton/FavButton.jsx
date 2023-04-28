import React, { useContext, useEffect, useState } from 'react'
import { UseApiContext } from '../../context/ApiContext'
import ToastLoginLink from '../ToastLoginLink/ToastLoginLink';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FavButton = ({ queProducto }) => {

    const { actionToFavsOrCart, user, setUser } = useContext(UseApiContext)
    const [onFav, setOnFav] = useState(false)

    const notify = () => {

        toast.warning(ToastLoginLink, { autoClose: 3000 })
    }

    useEffect(() => {

        if (user.id !== undefined) {
            for (const key in user.favoritos) {

                if (user.favoritos[key].titulo === queProducto.titulo) {
                    setOnFav(true)
                }
            }
        }

    }, [user, queProducto])

    const prendeApaga = () => {

        let newArray = []

        if (user.id !== undefined) {

            if (onFav) {

                newArray = user.favoritos.filter(obj => obj.titulo !== queProducto.titulo)

            } else if (onFav === false) {

                newArray = user.favoritos
                newArray.push(queProducto)

            }

            setUser({ ...user, favoritos: newArray })
            actionToFavsOrCart(user.id, '', newArray, "favoritos")
            localStorage.setItem(`USUARIO LOGUEADO`, JSON.stringify({ ...user, favoritos: newArray }))

            if (onFav) {
                setOnFav(false)
            } else {
                setOnFav(true)
            }

        } else if (user.id === undefined) {
            //DEBE REGISTRARSE
            notify()

        }
    }

    return (
        <div  className='holaDai'>
            <button className='favButtonStyle' onClick={prendeApaga} >
                {
                    onFav ?
                        <img className='favNotFavImg' src="/assets/fav.png" alt="fav" />
                        :
                        <img className='favNotFavImg' src="/assets/notfav.png" alt="not fav" />
                }
            </button>
            <ToastContainer className="mar-top-25" />
        </div >
    )
}

export default FavButton
