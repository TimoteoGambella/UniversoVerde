import React from 'react'
import Spinner from 'react-bootstrap/Spinner';


const Loading = () => {
    return (
        <div className='w-100 loaderStyle'>

            <div className="d-flex-column h-100 loaderStyle__container">

                <img src="/assets/loginLogo.png" alt="logo" />
                <Spinner animation="border" variant="success" />

            </div>

        </div>
    )
}

export default Loading