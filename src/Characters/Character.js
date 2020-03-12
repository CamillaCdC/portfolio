import React from 'react'

export default function Character (props) {

    return (

        <svg>
            <defs>
                <pattern 
                    id={props.character} 
                    patternUnits="objectBoundingBox" 
                    width="100%" 
                    height="100%"
                >
                    <image 
                        xlinkHref={require(`../images/${props.character}.png`)}
                        width="60px" 
                        height="69px"
                    />
                </pattern>
            </defs>
          
            <rect
                fill={`url(#${props.character})`}
                x={`${props.x}%`}
                y={`${props.y}%`}
                width="60px"
                height="69px"
            />
        
        </svg>
    )

}
