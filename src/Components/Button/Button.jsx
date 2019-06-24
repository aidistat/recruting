import React, { Component } from "react";
import './button.css';

class Button extends Component {
    render() {
        let { text, onclick } = this.props;
        return (
            <button onClick={onclick}>{text}</button>
        );
    }
}

export default Button;
