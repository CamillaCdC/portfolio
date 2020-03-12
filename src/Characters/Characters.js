import React from 'react'
import Character from './Character'

export default function Characters (props) {
    const characters = props.charactersObject

    return (
        <svg>           
            <Character
                character="dumbledoor"
                x={characters.dumbledoor[0]}
                y={characters.dumbledoor[1]}
            />                 
            <Character
                character="ron"
                x={characters.ron[0]}
                y={characters.ron[1]}
            />                                      
            <Character
                character="hermione"
                x={characters.hermione[0]}
                y={characters.hermione[1]}
            />          
            <Character
                character="luna"
                x={characters.luna[0]}
                y={characters.luna[1]}
            />
            <Character
                character="hedwig"
                x={characters.hedwig[0]}
                y={characters.hedwig[1]}
            />
        </svg>
    )

}