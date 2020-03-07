import React from 'react'
import Character from './Character'

export default function Harry (props) {

    return (
        <Character
            
            width="5"
            height="5"
            fill="red"
            x={props.x}
            y={props.y}
        />

    )

}