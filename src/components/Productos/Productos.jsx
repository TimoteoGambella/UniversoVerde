import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FavButton from '../FavButton/FavButton'

const Productos = ({ cadaProductoBien }) => {

    const [favs, setFavs] = useState([])

    return (
        <div className='full bg-gradient-large w-100 d-flex-column bienestarListStyle'>
            {
                cadaProductoBien.map((elProducto, i) => {
                    return (

                        <div className='d-flex-column-center br-13 productCard__container' key={i}>

                            <div className="productCard__container-favIconStyle">
                                <FavButton queProducto={elProducto}
                                    favs={favs}
                                    setFavs={setFavs} />
                            </div>

                            <Link className='principal-color txtDeco font-w-500 font-size-20 d-flex-column-center productCard__container-link' to={`/tiposAromas/${elProducto.titulo}`}  >

                                <img className='br-13' src={elProducto.foto} alt={elProducto.titulo} />
                                <span >{elProducto.titulo}</span>

                            </Link>

                        </div>
                    )
                })
            }
        </div >
    )
}

export default Productos