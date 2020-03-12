import React from 'react'
import Cobble from './Cobble'
import cobblesCoordinates from './CobblesCoordinates'

export default function Paths (props) {

    return (

        <svg>
            {cobblesCoordinates.map(cobble => {
                return <Cobble x={cobble[0]} y={cobble[1]} key={`${cobble[0]}, ${cobble[1]}`}/>
            })}
        </svg>
    )
}