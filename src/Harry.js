import React from 'react'

export default function Harry (props) {

    const popUp = [props.x - 11, props.y - 15]

    return ( 

        <svg> 
            <defs>
                <pattern 
                    id="harry" 
                    patternUnits="objectBoundingBox" 
                    width="100%" 
                    height="100%"
                >
                    <image 
                        xlinkHref={require(`./images/harry.png`)}
                        width="60px" 
                        height="69px"
                    />
                </pattern>  
            </defs>  

            <rect
                width="60px"
                height="69px"
                fill={`url(#harry)`}
                x={`${props.x}%`}
                y={`${props.y}%`}
            />

            <svg display={props.popUpHarry}>
                <rect
                    x={`${popUp[0] - 1}%`} 
                    y={`${popUp[1] - 3}%`}
                    width="300px"
                    height="120px"
                    fill="black"
                    stroke="black"
                    strokeWidth="2px"
                />
                <text 
                    fill="white"
                    x={`${popUp[0]}%`} 
                    y={`${popUp[1]}%`}
                >Hi there! I'm Harry Potter. 
                    <tspan 
                        x={`${popUp[0]}%`} 
                        dy="2.6%"
                    >I've heard about someone called Camilla</tspan>
                    <tspan 
                        x={`${popUp[0]}%`} 
                        dy="2.6%"
                    > Champion de Crespigny.</tspan>
                    <tspan 
                        x={`${popUp[0]}%`} 
                        dy="2.6%"
                    >My friends won't stop talking about her.</tspan>
                    <tspan 
                        x={`${popUp[0]}%`} 
                        dy="2.6%"
                    >Lets go talk to them to find out more</tspan>
                    <tspan 
                        x={`${popUp[0]}%`} 
                        dy="2.6%"
                    > about this mysterious software engineer.</tspan>                
                </text>
            </svg>

            <svg display={props.popUpInstrctions}>
                <rect
                    x={`${popUp[0] - 1}%`} 
                    y={`${popUp[1] + 27}%`}
                    width="300px"
                    height="135px"
                    fill="black"
                    stroke="black"
                    strokeWidth="2px"
                />
                <text 
                    fill="white"
                    x={`${popUp[0]}%`} 
                    y={`${popUp[1] + 30}%`}
                >
                    Use your arrow keys to move me around
                    <tspan
                        x={`${popUp[0]}%`} 
                        dy="2.6%"
                    > the board.</tspan>
                    <tspan
                        x={`${popUp[0]}%`} 
                        dy="2.6%"
                    >My Friends will speak when I bump into</tspan>
                    <tspan
                        x={`${popUp[0]}%`} 
                        dy="2.6%"
                    > them.</tspan>
                    <tspan
                        x={`${popUp[0]}%`} 
                        dy="2.6%"
                    >To see these instructions again, click the</tspan>
                    <tspan
                        x={`${popUp[0]}%`} 
                        dy="2.6%"
                    > Instructions button below the board.</tspan>
                    <tspan
                        x={`${popUp[0]}%`} 
                        dy="2.6%"
                    >To hide, use any arrow key.</tspan>
                </text>
            </svg>
        </svg>
    )
}


