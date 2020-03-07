import React from 'react'

export default function Character (props) {

    return (
        <rect
            width={`${props.width}%`}
            height={`${props.height}%`}
            fill={props.fill}
            x={`${props.x}%`}
            y={`${props.y}%`}
        />
    )

}