import React from 'react'
import RandomFacts from './RandomFacts'


class LunaFunctionality extends React.Component {
    state = {
        detailsDisplay: "none"
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

        if (this.props.display === "none" && this.state.detailsDisplay === "") {
            this.setState({
                detailsDisplay: "none"
            })
        }

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
                    className="randomFactPopUp"
                    style={{ 
                        display: this.state.detailsDisplay }}
                >
                    <button className="closePopUp closePopUpLuna" onClick={this.xClick}>x</button>
                    <p>{RandomFacts[[Math.floor(Math.random() * RandomFacts.length)]]}</p>
                </div>
            
            </div>
        )   
    }
}

export default LunaFunctionality;