import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// import Header from "./Components/Header/Header.jsx";
// import Routers from "./Components/Router/Routers";
import Home from "./Pages/Home"
import Report from "./Pages/Report"


export default class App extends Component {

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/report" component={Report} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        );
    }
}
