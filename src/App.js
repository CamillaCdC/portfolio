import React from 'react';
import Game from './Game';
import {
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link
} from "react-router-dom";

function Muggle () {
    return (
        <section>
            <h1>Muggle View - Coming soon!</h1>
            <Link to="/">Back to Harry Potter view</Link>
        </section>
    )
}

class App extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/mv/home">
                        <Muggle />
                    </Route>
                    <Route path="/">
                        <Game />
                    </Route>
                </Switch>
            </Router>
        )
    }
} 

export default App;