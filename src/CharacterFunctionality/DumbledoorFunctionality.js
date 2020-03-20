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

    // handleDownload = () => {

    // }

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
                    <Document file="/Camilla_Champion_de_Crespigny_CV.pdf" >
                        <Page pageNumber={1} 
                        width={800} 
                        />
                    </Document>
                <button 
                style={{
                        position: "absolute",
                        right: ".5%",
                        top: ".2%"
                    }}
                onClick={this.xClick}>x</button>
                <p><a href="/Camilla_Champion_de_Crespigny_CV.pdf"  
                    style={{
                        position: "absolute",
                        right: "30px",
                        top: ".2%", 
                        color: "white"
                    }}
                download >Download</a></p>
                </div>                

            </div>           
        )   
    }
}

export default DumbledoorFunctionality;