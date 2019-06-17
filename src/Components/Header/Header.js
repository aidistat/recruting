import React, { Component } from "react";
import './header.css';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <span className="logo">HR</span>
                <ul className="nav">
                    <li>Job.kg</li>
                    <li>HeadHunter</li>
                    <li>Zensoft.io</li>
                </ul>
            </div>
        );
    }
}

export default Header;
