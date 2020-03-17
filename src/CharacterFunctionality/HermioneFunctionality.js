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
                    <p>Camilla's GA Projects</p>
                    <p>Project 1: <a href="https://github.com/CamillaCdC/tic-tac-toe">Harry Potter tic-tac-toe</a></p>
                    <p>Project 2: <a href="https://github.com/CamillaCdC/whats-on-melbourne">CRUD app deployed on Heroku</a></p>
                    <p>Project 3: <a href="https://github.com/tmak1/park-spectre-client">Park-Inspector App</a></p>
                    <p>Project 2: Harry Potter portfolio website (you're here!)</p>
                </div>
            </div>
        )   
    }
}

export default HermioneFunctionality;