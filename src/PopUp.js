import React from 'react'

export default function PopUp (props) {

    return (

        <svg>
            <rect 
                width="170px"
                height="80px"
                fill={props.fill}
                x={`${props.x + 6.25}%`}
                y={`${props.y - 12}%`}
                display=""
                stroke="black"
                strokeWidth="2px"
            />

            <text 
                x={`${props.x}%`}
                y={`${props.y}%`}
            >
                {props.text}
            </text>
        </svg>

    )
}