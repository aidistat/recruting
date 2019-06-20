import React, { Component } from "react";
import styled from 'styled-components';

let Btn = styled.button`
    width: 80px;
    height: 30px;
    background: #dddddd;
    text-decoration: none;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    :hover {
        opacity: .8;
    }
`

class Button extends Component {
    render() {
        let { text, onclick } = this.props;

        return (
            <Btn onClick={onclick}>{text}</Btn>
        );
    }
}

export default Button;
