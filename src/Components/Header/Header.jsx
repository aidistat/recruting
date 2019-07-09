import React, { Component } from 'react';
import './header.css';
import * as Constants from '../../Constants/constants';
import {NavLink} from 'react-router-dom';

class Header extends Component {
   render() {
       let location = window.location.pathname;
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
              <li key={i} className={location === route.path ? 'currentTab' : ''}>
                <NavLink to={route.path}> {route.title} </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Header;
