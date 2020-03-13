import React from 'react'
import BoardPiece from './BoardPiece'
import Paths from './Paths.js'


import '../App.css'

export default function Board (props) {
    return (
        <svg >
            <rect
                width="100%" 
                height="100%" 
                fill="#d6bca9"
                stroke="black"
                strokeWidth="4px"
            />

            <Paths />  
                                
            <BoardPiece
                name="hogwarts"
                width={354}
                height={203}
                x="0px"
                y="2px"
            />                    
            <BoardPiece
                name="willow"
                width={120}
                height={160}
                x="839px"
                y="540px"
            />  
        </svg>
    )
}