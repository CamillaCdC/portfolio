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

                <div className="CV"
                    style={{ display: this.state.displayCV }}
                >
                    <Document file="/Camilla_Champion_de_Crespigny_CV.pdf" >
                        <Page pageNumber={1} 
                        width={800} 
                        />
                    </Document>
                <button 
                    className="closeCV"
                    onClick={this.xClick}
                >x</button>
                <p><a 
                    href="/Camilla_Champion_de_Crespigny_CV.pdf" 
                    className="downloadCV" 
                    download 
                >Download</a></p>
                </div>                

            </div>           
        )   
    }
}

export default DumbledoorFunctionality;