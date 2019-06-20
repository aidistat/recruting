import React, { Component } from "react";
import './header.css';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <span className="logo">HR</span>
                <ul className="nav">
                    <li><a href="/jobkg">Job.kg</a></li>
                    <li><a href="/hh">HeadHunter</a></li>
                    <li><a href="/zensoftio">Zensoft.io</a></li>
                    <li><a href="/wholedb">Whole DataBase</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;
