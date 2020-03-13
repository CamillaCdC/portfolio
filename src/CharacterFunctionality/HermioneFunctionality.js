import React from 'react'

class HermioneFunctionality extends React.Component {
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
                    className="popUps popUpHermione"
                    style={{ display: this.props.display }}
                >
                    <p>Hi Harry!</p>
                    <p>Want to check out some of Camilla's projects?</p>
                    <button onClick={this.handleClickHere}>Click here</button>
                </div>

                <div
                    className="detailsPopUp"
                    style={{ display: this.state.detailsDisplay }}
                >
                    <button className="closePopUp" onClick={this.xClick}>x</button>
                    <p>Camilla's Projects</p>
                </div>
            </div>
        )   
    }
}

export default HermioneFunctionality;