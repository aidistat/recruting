import React, { Component } from 'react';
import './header.css';
import * as Constants from '../../Constants/constants';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <span className="logo">HR</span>
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
