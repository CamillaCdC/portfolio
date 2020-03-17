import React from 'react'
import Contact from '../Contact';

class RonFunctionality extends React.Component {
    
    state = {
        detailsDisplay: "none", 
    }

    xClick = () => {
        this.setState({
            detailsDisplay: "none",
        }) 
    }

    handleClickHere = () => {
        this.setState({
            detailsDisplay: "",
        }) 
    }

    render () {
        return (
            <div>
                <div 
                    className="popUps popUpRon"
                    style={{ display: this.props.display }}
                >
                    <p>Hi Harry!</p>
                    <p>Do you want to send Camilla an owl?</p>
                    <button onClick={this.handleClickHere}>Click here.</button>             
                </div> 
                
                <div
                    className="detailsPopUp"
                    style={{ display: this.state.detailsDisplay}}
                >
                    <button className="closePopUp" onClick={this.xClick}>x</button>
                    <p>Contact Camilla Form</p>
                    
                    <Contact />
                </div>
            </div>
        )   
    }
}

export default RonFunctionality;