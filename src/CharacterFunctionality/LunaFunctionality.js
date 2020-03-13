import React from 'react'


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

    render () {
        return (
            <div>
                <div
                    className="popUps popUpLuna"
                    style={{ display: this.props.display }}
                >
                    <p>Hi Harry!</p>
                    <p>Want to hear a random fact about Camilla?</p>
                    <button onClick={this.handleClickHere}>Click here.</button>
                </div>
            
                <div
                    className="detailsPopUp"
                    style={{ display: this.state.detailsDisplay }}
                >
                    <button className="closePopUp" onClick={this.xClick}>x</button>
                    <p>Random Fact</p> 
                </div>
            
            </div>
        )   
    }
}

export default LunaFunctionality;