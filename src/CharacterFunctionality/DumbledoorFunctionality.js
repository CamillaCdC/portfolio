import React from 'react'

class DumbledoorFunctionality extends React.Component {

    render () {
        return (
            <div>
                <div
                    className="popUps popUpDumbledoor"
                    style={{ display: this.props.display }}
                >
                    <p>Hi Harry!</p>
                    <p>Do you want to see Camilla's CV?</p>
                    <p><a href="/cv.pdf" download>Download it here.</a></p>
                </div>
            </div>           
        )   
    }
}

export default DumbledoorFunctionality;