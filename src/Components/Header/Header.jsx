import React, { Component } from 'react';
import './header.css';
import * as Constants from '../../Constants/constants';
import src from '../../../public/img/logo.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo-icon">
          <img src={src} alt="logo" />
          <span className="logo">HR</span>
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
