import React, { Component } from "react";
import styled from 'styled-components';

let Btn = styled.button`
    width: 80px;
    height: 40px;
    font-weight: 700;
    background: grey;
    color: black;
    text-decoration: none;
    border-radius: 5px;
    border: 0;
    :hover {
        color: grey;
        background: #000;
    }
`

class Button extends Component {
    render() {
        let { text, onclick } = this.props;

        return (
            <Btn onClick={() => onclick && onclick()}>{text}</Btn>
        );
    }
}

export default Button;
