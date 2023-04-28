import React, { Fragment } from 'react'
import Bienestar from '../Bienestar/Bienestar'
import SubtituloBienestar from '../SubtituloBienestar/SubtituloBienestar'

const BienestarList = ({ miTipo }) => {

    return (
        <div className='w-100'>
            {miTipo.map((elTipo, i) => {
                return (
                    <Fragment key={i}>

                        <SubtituloBienestar elTipo={elTipo} />

                        <Bienestar bienestarFisOEmo={elTipo} />

                    </Fragment>
                )
            })}
        </div>
    )
}

export default BienestarList
