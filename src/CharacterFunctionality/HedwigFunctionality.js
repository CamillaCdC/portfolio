import React from 'react'

class Hedwig extends React.Component {
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
                    className="popUps popUpHedwig"
                    style={{ display: this.props.display }}
                >
                    <p>Hoo Hoo Harry!</p>
                    <p>Want to find out more about hoo Camilla is?</p>
                    <button onClick={this.handleClickHere}>Click here</button>
                </div>

                <div
                    className="detailsPopUp"
                    style={{ display: this.state.detailsDisplay }}
                >
                    <button className="closePopUp" onClick={this.xClick}>x</button>
                    <p>Camilla's personal brand</p> 
                </div>
            </div>
        )   
    }
}

export default Hedwig;