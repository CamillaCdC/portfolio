import React from 'react'

class RonFunctionality extends React.Component {
    
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

    render () {
        return (
            <div>
                <div className="popUps popUpRon"
                    style={{ display: this.props.display}}
                >
                    <p>Hi Harry!</p>
                    <p>Do you want Camilla's contact details?</p>
                    <p><button onClick={this.handleClickHere}>Click here.</button></p>              
                </div> 
                
                <div 
                    className="contactDetails"
                    style={{ display: this.state.detailsDisplay}}
                >
                    <button className="closePopUp" onClick={this.xClick}>x</button>
                    <p>Contact Details</p>                    
                </div> 
            </div>
        )   
    }
}

export default RonFunctionality;