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
            detailsDisplay: ""
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
                    <p>Message from Camilla:</p> 
                    <p>I am a junior software engineer with a passion for creating well-tested, clean and easy to understand code that results in beautifully designed and intuitive user experiences. I enjoy working on projects that will have a positive impact upon people and the environment.</p>
                    <p>I work best when I am being challenged and surrounded by a passionate team.</p>
                </div>
            </div>
        )   
    }
}

export default Hedwig;