import React, { Component } from 'react';
import './header.css';
import * as Constants from '../../Constants/constants';

class Header extends Component {
  render() {
      console.log(window.location);
    return (
      <div className="header">
        <div className="logo-icon">
          <span className="logo">
            <span className="triangle">&#9650;</span>
            zenHR
          </span>
        </div>
        <ul className="nav">
          {Constants.ROUTES.map((route, i) => {
            return (
              <li key={i}>
                <a href={route.path}>{route.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Header;
