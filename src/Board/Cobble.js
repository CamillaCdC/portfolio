import React from 'react'
import BoardPiece from './BoardPiece'

export default function Cobble (props) {
    return (
        <svg>
            <BoardPiece
                name="cobble"
                width={30}
                height={30}
                x={`${(props.x * 6.25)}%`}
                y={`${(props.y * 10)}%`}
            />
            <BoardPiece
                name="cobble"
                width={30}
                height={30}
                x={`${(props.x * 6.25) + 3.125}%`}
                y={`${(props.y * 10)}%`}
            />
            <BoardPiece
                name="cobble"
                width={30}
                height={30}
                x={`${(props.x * 6.25)}%`}
                y={`${(props.y * 10) + 3.125}%`}
            />
            <BoardPiece
                name="cobble"
                width={30}
                height={30}
                x={`${(props.x * 6.25) + 3.125}%`}
                y={`${(props.y * 10) + 3.125}%`}
            />
            <BoardPiece
                name="cobble"
                width={30}
                height={30}
                x={`${(props.x * 6.25) + 3.125}%`}
                y={`${(props.y * 10) + (3.125 * 2)}%`}
            />
            <BoardPiece
                name="cobble"
                width={30}
                height={30}
                x={`${(props.x * 6.25)}%`}
                y={`${(props.y * 10) + (3.125 * 2)}%`}
            />
        </svg>
    )
}