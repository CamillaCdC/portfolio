import React from 'react'
import PopUp from '../PopUp'

const x = 12.5;
const y = 80;

class LunaFunctionality extends React.Component {
    state = {
        detailsDisplay: "none", 
    }

    xClick = () => {
        this.setState({
            detailsDisplay: "none"
        }) 
    }

    handleClickHere = () => {
        this.setState({
            detailsDisplay: "",
        }) 
    }

    LunaText = (x, y) => {

        var textX = x + 7
        var textY = y - 9  

        return (
            <tspan 
                x={`${textX}%`}
                y={`${textY}%`}
            >Hi Harry!
                <tspan 
                    x={`${textX}%`}
                    dy="2.6%"
                >Want to hear a random</tspan>
                <tspan 
                    x={`${textX}%`}
                    dy="2.6%"
                > fact about Camilla?</tspan>
                <tspan 
                    x={`${textX}%`}
                    dy="2.6%"
                >
                    <tspan onClick={this.handleClickHere} className="link">Click here</tspan>
                </tspan>
            </tspan>
        )       
    }

    render () {
        return (
            <svg display={this.props.display}>
                <PopUp
                    x={x}
                    y={y}
                    text={this.LunaText(x, y)}
                    fill="#f16274"
                />

                <rect
                    display={this.state.detailsDisplay}
                    x="240px"
                    y="172.5px"
                    width="480px"
                    height="345px"
                    stroke="black"
                    strokeWidth="2px"
                    fill="black"
                />

                <text
                    display={this.state.detailsDisplay}
                    x={`${240 + 10}px`}
                    y={`${172.5 + 20}px`}
                    fill="white"
                >Random Fact about Camilla
                    <tspan 
                        x={`${240 + 455}px`}
                        y={`${172.5 + 20}px`} 
                        onClick={this.xClick}   
                    >X</tspan>
                </text>
            </svg>
        )   
    }
}

export default LunaFunctionality;