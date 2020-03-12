import React from 'react'
import PopUp from '../PopUp'

const x = 56.25;
const y = 20;

class DumbledoorFunctionality extends React.Component {
    DumbledoorText = (x, y) => {

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
                >Do you want to see</tspan>
                <tspan 
                    x={`${textX}%`}
                    dy="2.6%"
                > Camilla's CV?</tspan>
                <tspan 
                    x={`${textX}%`}
                    dy="2.6%"
                >
                    <a href="/cv.pdf" target="_blank" className="link" download>Click here</a>
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
                    text={this.DumbledoorText(x, y)}
                    fill="#a08fb1"
                />
            </svg>            
        )   
    }
}

export default DumbledoorFunctionality;