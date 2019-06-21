import React, { Component } from "react";
import './header.css';
import * as myConst from "/home/user/hr_frontend/src/Services/constants";

class Header extends Component {

    render() {
        return (
            <div className="header">
                <span className="logo">HR</span>
                <ul className="nav">
                    {
                        myConst.nav.map(menu => {
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
