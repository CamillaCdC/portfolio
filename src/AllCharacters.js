import React from 'react';
import Character from './Character'
import Harry from './Harry'

import KeyboardEventHandler from 'react-keyboard-event-handler';

const characters = {
    Ron: {x: 30, y: 30}, 
    Hermione: {x: 70, y: 70}
}

class AllCharacters extends React.Component { 

    state = {
        xHarry: 50,
        yHarry: 50, 
        popUpRon: "none", 
        popUpHermione: "none"
    }

    popUpDisplay = (x, y) => {
        const Ron = Object.values(characters.Ron).toString()
        const Hermione = Object.values(characters.Hermione).toString()

        var harry = [x, y].toString()

        if (Ron === harry) {
            this.setState({
                popUpRon: ""
            }) 
        } 
        if (Hermione === harry) {
            this.setState({
                popUpHermione: ""
            })
        }
    }

    onKeyDown = (key, e) => {

        const coOrds = Object.values(characters)
        
        const characterXs = []
        const characterYs = []
        
        coOrds.forEach(coOrd => {
            characterXs.push(coOrd.x)
            characterYs.push(coOrd.y)
        });

        this.setState({
            popUpRon: "none", 
            popUpHermione: "none"
        })       

        if (key === "right" && this.state.xHarry < 95) {
            if (
                characterXs.includes(this.state.xHarry + 5) === true && 
                characterYs.includes(this.state.yHarry) === true
                ) {              
                this.popUpDisplay(this.state.xHarry + 5, this.state.yHarry)
            } else {
                this.setState({
                    xHarry: this.state.xHarry + 5
                })
            }
        }
        if (key === "left" && this.state.xHarry > 0 ) {
            if (
                characterXs.includes(this.state.xHarry - 5) === true &&
                characterYs.includes(this.state.yHarry) === true
                ) {
                this.popUpDisplay(this.state.xHarry - 5, this.state.yHarry)
            } else {
                this.setState({
                    xHarry: this.state.xHarry - 5
                })
            }
        }
        if (key === "down" && this.state.yHarry < 95) {
            if (
                characterXs.includes(this.state.xHarry) === true &&
                characterYs.includes(this.state.yHarry + 5) === true
                ) {
                this.popUpDisplay(this.state.xHarry, this.state.yHarry + 5)
            } else {
                this.setState({
                    yHarry: this.state.yHarry + 5
                })
            }
        }
        if (key === "up" && this.state.yHarry > 0) {
            if (
                characterXs.includes(this.state.xHarry) === true &&
                characterYs.includes(this.state.yHarry - 5) === true
                ) {
                this.popUpDisplay(this.state.xHarry, this.state.yHarry - 5)
            } else {
                this.setState({
                    yHarry: this.state.yHarry - 5
                })
            }
        }
    }
        
    render() {
        return (

            <div className="game">

                <KeyboardEventHandler
                    handleKeys={["all"]}
                    onKeyEvent={(key, e) => {
                        this.onKeyDown(key, e)
                        }} 
                />

                {/* <p style={{display: this.state.popUpRon}}>
                    this is a test paragraph
                </p> */}

                <svg>
                    <rect
                        className="board"
                        width="100%" 
                        height="100%" 
                        fill="lightgray"
                    />

                    <Harry 
                        onKeyDown={this.onKeyDown}
                        x={this.state.xHarry}
                        y={this.state.yHarry}
                    />

                    <Character
                        className="Ron"
                        width="5"
                        height="5"
                        fill="blue"
                        x={characters.Ron.x}
                        y={characters.Ron.y}
                    />

                    <rect
                        className="popUpRon"
                        width="50px"
                        height="50px"
                        fill="lightblue"
                        x={`${characters.Ron.x + 5}%`}
                        y={`${characters.Ron.y - 7.5}%`}
                        display={this.state.popUpRon}
                    />

                    <Character
                        width="5"
                        height="5"
                        fill="green"
                        x={characters.Hermione.x}
                        y={characters.Hermione.y}
                    />

                    <rect
                        className="popUpHermione"
                        width="50px"
                        height="50px"
                        fill="lightgreen"
                        x={`${characters.Hermione.x + 5}%`}
                        y={`${characters.Hermione.y - 7.5}%`}
                        display={this.state.popUpHermione}
                    />

                </svg>
            </div>
        )
    }
}

export default AllCharacters;
