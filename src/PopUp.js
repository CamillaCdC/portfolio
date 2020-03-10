import React from 'react'

export default function PopUp (props) {

    return (

        <svg>
            <rect 
                width="120px"
                height="50px"
                fill={props.fill}
                x={`${props.x + 6.25}%`}
                y={`${props.y - 7.5}%`}
                display={props.display}
            />

            <text 
                x={`${props.x + 7}%`}
                y={`${props.y - 3}%`}
                display={props.display}

            >
                {props.text}
            </text>

        </svg>

    )

}