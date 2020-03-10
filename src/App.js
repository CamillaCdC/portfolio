import React from 'react';
import AllCharacters from './AllCharacters'
import {
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link, 
    useParams
} from "react-router-dom";

import './App.css';

class App extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/">
                        <AllCharacters />
                    </Route>
                </Switch>
            </Router>
        )
    }
} 

export default App;