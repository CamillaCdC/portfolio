import React from 'react'
import { Document, Page } from "react-pdf/dist/entry.webpack";

import "react-pdf/dist/Page/AnnotationLayer.css";

class DumbledoorFunctionality extends React.Component {
    state = {
        displayCV: "none"
    }

    viewClick = () => {
        this.setState({
            displayCV: ""
        })
    }

    xClick = () => {
        this.setState({
            displayCV: "none"
        })
    }

    render () {
        return (
            <div>
                <div
                    className="popUps popUpDumbledoor"
                    style={{ display: this.props.display }}
                >
                    <p>Hi Harry!</p>
                    <p>Do you want to see Camilla's CV?</p>
                    <p><button onClick={this.viewClick}>View it here</button></p>
                </div>

                <div 
                    style={{ 
                        position: "absolute",
                        border: "2px solid black",
                        top: 7,
                        left: "80px",
                        width: 804,
                        display: this.state.displayCV
                    }}
                >
                    <Document file="/cv.pdf" >
                        <Page pageNumber={1} width={800} />
                    </Document>
                <button className="closePopUp" onClick={this.xClick}>x</button>
                </div>                

            </div>           
        )   
    }
}

export default DumbledoorFunctionality;