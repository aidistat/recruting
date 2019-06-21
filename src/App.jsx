import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header.jsx";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Jobkg from "./Pages/Jobkg";
import Hh from "./Pages/Hh";
import Zensoftio from "./Pages/Zensoftio";
import Whole from "./Pages/Whole";

export default class App extends Component {

  render() {
     return (
        <div className="App">
          <Header />
          <Router>
              <Route path="/jobkg" component={Jobkg} />
              <Route path="/hh" component={Hh} />
              <Route path="/zensoftio" component={Zensoftio} />
              <Route path="/entiredb" component={Whole} />
          </Router>
      </div>
    );
  }
}
