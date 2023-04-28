import React from 'react'
import Productos from '../Productos/Productos'
import SubtituloPrimerList from '../SubtituloPrimerList/SubtituloPrimerList'

const PrimerList = ({ tipo }) => {
    return (
        <>
            <SubtituloPrimerList tipo={tipo} />

            <div className='full w-100  bienestarListStyle'>


                <Productos cadaProductoBien={tipo["productos"]} />

            </div>
        </>
    )
}

export default PrimerList