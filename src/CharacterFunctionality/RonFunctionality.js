import React from 'react'
import Contact from '../Contact';

class RonFunctionality extends React.Component {
    
    state = {
        detailsDisplay: "none", 
        emailFormDisplay: "none"
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

    xClickEmail = () => {
        this.setState({
            emailFormDisplay: "none",
        }) 
    }

    emailClick = () => {
        this.setState({
            emailFormDisplay: ""
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
                    <p>Do you want Camilla's contact details?</p>
                    <button onClick={this.handleClickHere}>Click here.</button>             
                </div> 
                
                <div 
                    className="detailsPopUp"
                    style={{ display: this.state.detailsDisplay}}
                >
                    <button className="closePopUp" onClick={this.xClick}>x</button>
                    <p>Contact Details</p> 
                    <p>cam**********gny@gmail.com</p>
                    <p><button onClick={this.emailClick}>Contact Camilla Form</button></p>
                </div> 

                <div
                    className="detailsPopUp"
                    style={{ display: this.state.emailFormDisplay}}
                >
                    <button className="closePopUp" onClick={this.xClickEmail}>x</button>
                    <p>Contact Camilla Form</p>
                    
                    <Contact />
                </div>
            </div>
        )   
    }
}

export default RonFunctionality;