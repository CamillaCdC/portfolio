import React from 'react'

export default function BoardPiece (props) {

    return (

        <svg>
            <defs>
                <pattern 
                    id={props.name} 
                    patternUnits="objectBoundingBox" 
                    width="100%" 
                    height="100%"
                >
                    <image 
                        xlinkHref={require(`./images/${props.name}.png`)}
                        width={`${props.width}px`}
                        height={`${props.height}px`}
                    />
                </pattern>
            </defs>
          
            <rect
                fill={`url(#${props.name})`}
                x={`${props.x}`}
                y={`${props.y}`}
                width={`${props.width}px`}
                height={`${props.height}px`}
            />
        
        </svg>
    )

}
