import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header.jsx";
import Routers from "./Components/Router/Routers";

export default class App extends Component {

  render() {
     return (
        <div className="App">
          <Header />
          <Routers />
      </div>
    );
  }
}
