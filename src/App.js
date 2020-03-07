import React from 'react';
import Character from './Character'
import Harry from './Harry'

import KeyboardEventHandler from 'react-keyboard-event-handler';

import './App.css';

const characters = {
        Ron: {x: 30, y: 30}, 
        Hermione: {x: 70, y: 70}
    }

class App extends React.Component { 

    state = {
        xHarry: 50,
        yHarry: 50, 
    }

    onKeyDown = (key, e) => {

        const coOrds = Object.values(characters)
        
        const characterXs = []
        const characterYs = []
        
        coOrds.forEach(coOrd => {
            characterXs.push(coOrd.x)
            characterYs.push(coOrd.y)
        });

        if (key === "right" && this.state.xHarry < 95) {
            if (
                characterXs.includes(this.state.xHarry + 5) === true && 
                characterYs.includes(this.state.yHarry) === true
                ) {
                console.log("blocked")
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
                console.log("blocked")
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
                console.log("blocked")
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
                console.log("blocked")
            } else {
                this.setState({
                    yHarry: this.state.yHarry - 5
                })
            }
        }
    }

    render() {

        return (
            <div className="App">
                <KeyboardEventHandler
                    handleKeys={["all"]}
                    onKeyEvent={(key, e) => {
                        this.onKeyDown(key, e)
                        }} 
                />
                <h1>Test</h1>
                <div className="game">
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
                            width="5"
                            height="5"
                            fill="blue"
                            x={characters.Ron.x}
                            y={characters.Ron.y}
                        />
                        {/* <rect
                            width="10%"
                            height="10%"
                            fill="lightblue"
                            x={`${characters.Ron.x + 5}%`}
                            y={`${characters.Ron.y - 10}%`}
                            display={characters.Ron.display}
                        /> */}

                        <Character
                            width="5"
                            height="5"
                            fill="green"
                            x={characters.Hermione.x}
                            y={characters.Hermione.y}
                        />

                    </svg>
                
                </div>
            </div>
        )
    }
}

export default App;
