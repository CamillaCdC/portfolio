import React from 'react'

import Characters from './Characters/Characters'
import Harry from './Characters/Harry'
import './Characters/AllCharacters.css';
import characters from './Characters/CharacterCoordinates'
import checkCharacterPopUp from './Characters/CheckCharacterPopUp'

import RonFunctionality from './CharacterFunctionality/RonFunctionality'
import HermioneFunctionality from './CharacterFunctionality/HermioneFunctionality'
import DumbledoorFunctionality from './CharacterFunctionality/DumbledoorFunctionality'
import LunaFunctionality from './CharacterFunctionality/LunaFunctionality'
import HedwigFunctionality from './CharacterFunctionality/HedwigFunctionality'

import Board from './Board/Board'
import cobblesCoordinates from './Board/CobblesCoordinates'

import KeyboardEventHandler from 'react-keyboard-event-handler';

import './App.css'


class Game extends React.Component { 

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

    popUpDisplay = ([x, y]) => {
        var harry = [x, y].toString()
        this.setState({
            popUpRon: checkCharacterPopUp.checkPopUpForRon(harry),
            popUpHermione: checkCharacterPopUp.checkPopUpForHermione(harry),
            popUpDumbledoor: checkCharacterPopUp.checkPopUpForDumbledoor(harry), 
            popUpLuna: checkCharacterPopUp.checkPopUpForLuna(harry), 
            popUpHedwig: checkCharacterPopUp.checkPopUpForHedwig(harry)
        })  
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
        const characterCoordinates = Object.values(characters)
        var result

        if (key === "right" && harry[0] < 93.75) {
            var harryRight = [harry[0] + 6.25, harry[1]]

            cobblesCoordinates.forEach(cobble => {
                var cobblePosition = [cobble[0] * 6.25, cobble[1] * 10]
                if (harryRight.toString() === cobblePosition.toString()){
                    characterCoordinates.forEach(coordinate => {
                        if (coordinate.toString() === harryRight.toString()) {
                            result = coordinate
                        }                
                    });
                    if (result !== undefined) {
                        this.popUpDisplay(harryRight)
                    } else {
                        this.setState({
                            xHarry: harry[0] + 6.25
                        })
                    }
                }
            });

        } else if (key === "left" && harry[0] > 0 ) {
            var harryLeft = [harry[0] - 6.25, harry[1]]

            cobblesCoordinates.forEach(cobble => {
                var cobblePosition = [cobble[0] * 6.25, cobble[1] * 10]
                if (harryLeft.toString() === cobblePosition.toString()){
                    characterCoordinates.forEach(coordinate => {
                        if (coordinate.toString() === harryLeft.toString()) {
                            result = coordinate
                        }                
                    });
                    if (result !== undefined) {
                        this.popUpDisplay(harryLeft)
                    } else {
                        this.setState({
                            xHarry: harry[0] - 6.25
                        })
                    }
                }
            });
            
        } else if (key === "down" && harry[1] < 90) {
            var harryDown = [harry[0], harry[1] + 10]

            cobblesCoordinates.forEach(cobble => {
                var cobblePosition = [cobble[0] * 6.25, cobble[1] * 10]
                if (harryDown.toString() === cobblePosition.toString()){
                    characterCoordinates.forEach(coordinate => {
                        if (coordinate.toString() === harryDown.toString()) {
                            result = coordinate
                        }                
                    });
                    if (result !== undefined) {
                        this.popUpDisplay(harryDown)
                    } else {
                        this.setState({
                            yHarry: harry[1] + 10
                        })
                    }
                }
            });

        } else if (key === "up" && harry[1] > 0) {
            var harryUp = [harry[0], harry[1] - 10]
            
            cobblesCoordinates.forEach(cobble => {
                var cobblePosition = [cobble[0] * 6.25, cobble[1] * 10]
                if (harryUp.toString() === cobblePosition.toString()){
                    characterCoordinates.forEach(coordinate => {
                        if (coordinate.toString() === harryUp.toString()) {
                            result = coordinate
                        }                
                    });
                    if (result !== undefined) {
                        this.popUpDisplay(harryUp)
                    } else {
                        this.setState({
                            yHarry: harry[1] - 10
                        })
                    }
                }              
            });
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
               
                <svg 
                    className="board" 
                > 
                    <Board />              

                    <Harry 
                        onKeyDown={this.onKeyDown}
                        x={this.state.xHarry}
                        y={this.state.yHarry}
                        popUpHarry={this.state.popUpHarry}
                        popUpInstrctions={this.state.popUpInstrctions}
                    />

                    <Characters 
                        charactersObject={characters}
                    />

                    <DumbledoorFunctionality
                        display={this.state.popUpDumbledoor}
                    />
                    <HermioneFunctionality
                        display={this.state.popUpHermione}
                    />                     
                    <LunaFunctionality
                        display={this.state.popUpLuna}
                    />
                    <HedwigFunctionality
                        display={this.state.popUpHedwig}
                    />
                </svg> 
                
                    <RonFunctionality 
                        display={this.state.popUpRon}
                    />  

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

export default Game;

