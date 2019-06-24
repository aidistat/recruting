import React, { Component } from "react";
import './header.css';
import * as Constants from "../../Services/constants";

class Header extends Component {

    render() {
        return (
            <div className="header">
                <span className="logo">HR</span>
                <ul className="nav">
                    {
                        Constants.nav.map(menu => {
                            return (
                                <li><a href={menu.href}>{menu.title}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Header;
