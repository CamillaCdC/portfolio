import React from 'react';
import Character from './Character'
import Harry from './Harry'
import PopUp from './PopUp'

import KeyboardEventHandler from 'react-keyboard-event-handler';

const characters = {
    ron: {x: 25, y: 40}, 
    hermione: {x: 75, y: 70}, 
    dumbledoor: {x: 62.5, y: 10}, 
    luna: {x: 12.5, y: 80}, 
    hedwig: {x: 81.25, y: 30}
}
const ron = Object.values(characters.ron).toString()
const hermione = Object.values(characters.hermione).toString()
const dumbledoor = Object.values(characters.dumbledoor).toString()
const luna = Object.values(characters.luna).toString()
const hedwig = Object.values(characters.hedwig).toString()

class AllCharacters extends React.Component { 

    state = {
        xHarry: 50,
        yHarry: 50, 
        popUpHarry: "",
        popUpInstrctions: "",
        popUpRon: "none", 
        popUpHermione: "none", 
        popUpDumbledoor: "none", 
        popUpLuna: "none", 
        popUpHedwig: "none"
    }

    popUpDisplay = (x, y) => {
        
        var harry = [x, y].toString()

        if (ron === harry) {
            this.setState({
                popUpRon: ""
            }) 
        } else if (hermione === harry) {
            this.setState({
                popUpHermione: ""
            })
        } else if (dumbledoor === harry) {
            this.setState({
                popUpDumbledoor: ""
            })
        } else if (luna === harry) {
            this.setState({
                popUpLuna: ""
            })
        } else if (hedwig === harry) {
            this.setState({
                popUpHedwig: ""
            })
        }
    }

    onKeyDown = (key, e) => {
        
        this.setState({
            popUpHarry: "none",
            popUpInstrctions: "none",
            popUpRon: "none", 
            popUpHermione: "none", 
            popUpDumbledoor: "none", 
            popUpLuna: "none", 
            popUpHedwig: "none"
        })   

        var harry = [this.state.xHarry, this.state.yHarry]

        if (key === "right" && harry[0] < 93.75) {
            var harryRight = [harry[0] + 6.25, harry[1]].toString()
            if (
                    harryRight === hermione ||
                    harryRight === ron ||
                    harryRight === dumbledoor ||
                    harryRight === luna ||
                    harryRight === hedwig
                ) {              
                this.popUpDisplay(harry[0] + 6.25, harry[1])
            } else {
                this.setState({
                    xHarry: harry[0] + 6.25
                })
            }
        } else if (key === "left" && harry[0] > 0 ) {
            var harryLeft = [harry[0] - 6.25, harry[1]].toString()
            if (
                    harryLeft === hermione ||
                    harryLeft === ron || 
                    harryLeft === dumbledoor ||
                    harryLeft === luna ||
                    harryLeft === hedwig
                ) {
                this.popUpDisplay(harry[0] - 6.25, harry[1])
            } else {
                this.setState({
                    xHarry: harry[0] - 6.25
                })
            }
        } else if (key === "down" && harry[1] < 90) {
            var harryDown = [harry[0], harry[1] + 10].toString()
            if (
                    harryDown === hermione ||
                    harryDown === ron ||
                    harryDown === dumbledoor ||
                    harryDown === luna ||
                    harryDown === hedwig
                ) {
                this.popUpDisplay(harry[0], harry[1] + 10)
            } else {
                this.setState({
                    yHarry: harry[1] + 10
                })
            }
        } else if (key === "up" && harry[1] > 0) {
            var harryUp = [harry[0], harry[1] - 10].toString()
            if (
                    harryUp === hermione ||
                    harryUp === ron ||
                    harryUp === dumbledoor ||
                    harryUp === luna ||
                    harryUp === hedwig
                ) {
                this.popUpDisplay(harry[0], harry[1] - 10)
            } else {
                this.setState({
                    yHarry: harry[1] - 10
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
                        popUpHarry={this.state.popUpHarry}
                        popUpInstrctions={this.state.popUpInstrctions}
                    />

                    <Character
                        character="ron"
                        x={characters.ron.x}
                        y={characters.ron.y}
                    />
                    <PopUp
                        x={characters.ron.x}
                        y={characters.ron.y}
                        display={this.state.popUpRon}
                        text="Contact Info"
                        fill="pink"
                    />

                    <Character
                        character="hermione"
                        x={characters.hermione.x}
                        y={characters.hermione.y}
                    />
                    <PopUp
                        x={characters.hermione.x}
                        y={characters.hermione.y}
                        display={this.state.popUpHermione}
                        text="Projects"
                        fill="lightgreen"
                    />

                    <Character
                        character="dumbledoor"
                        x={characters.dumbledoor.x}
                        y={characters.dumbledoor.y}
                    />
                    <PopUp
                        x={characters.dumbledoor.x}
                        y={characters.dumbledoor.y}
                        display={this.state.popUpDumbledoor}
                        text="CV"
                        fill="lightblue"
                    />

                    <Character
                        character="luna"
                        x={characters.luna.x}
                        y={characters.luna.y}
                    />
                    <PopUp
                        x={characters.luna.x}
                        y={characters.luna.y}
                        display={this.state.popUpLuna}
                        text="Random fact"
                        fill="violet"                    
                    />

                    <Character
                        character="hedwig"
                        x={characters.hedwig.x}
                        y={characters.hedwig.y}
                    />
                    <PopUp
                        x={characters.hedwig.x}
                        y={characters.hedwig.y}
                        display={this.state.popUpHedwig}
                        text="Hoo is Camilla?"
                        fill="white"
                    />

                </svg>

                <footer>
                    <p><button onClick={() => {
                        this.setState({
                            popUpInstrctions: ""
                        })
                    }}>Instructions</button></p>
                    <p>|</p>
                    <p>&copy; Camilla Champion de Crespigny 2020</p>
                </footer>
            </div>

        )
    }
}

export default AllCharacters;

