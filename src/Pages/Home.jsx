import React, { Component } from 'react';

import Header from "../Components/Header/Header.jsx";
import Routers from "../Components/Router/Routers";

export default class Home extends Component {

    render() {
       return (
          <div className="Home">
            <Header />
            <Routers />
        </div>
      );
    }
  }