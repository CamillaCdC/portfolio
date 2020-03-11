import React from 'react'
import PopUp from '../PopUp'

const x = 70;
const y = 30;

class Hedwig extends React.Component {
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

    Hedwig = (x, y) => {

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
                >Want to know more</tspan>
                <tspan 
                    x={`${textX}%`}
                    dy="2.6%"
                > about hoo Camilla is?</tspan>
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
                    text={this.Hedwig(x, y)}
                    fill="#efefef"
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
                >Personal Brand
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

export default Hedwig;