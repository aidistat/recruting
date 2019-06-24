import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Jobkg from "../../Pages/Jobkg";
import Hh from "../../Pages/Headhunter";
import Zensoftio from "../../Pages/Zensoftio";
import Whole from "../../Pages/Whole";

class Routers extends Component {
    state = {
        sortedPeople: []
    }
    render() {
        return (
            <Router>
                <Route path="/jobkg" component={Jobkg}/>
                <Route path="/hh" component={Hh}/>
                <Route path="/zensoftio" component={Zensoftio}/>
                <Route path="/entiredb" component={Whole}/>
            </Router>
        );
    }
}

export default Routers;