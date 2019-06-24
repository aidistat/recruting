import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  render() {
    let { text, onClick } = this.props;
    return <button onClick={onClick}>{text}</button>;
  }
}

export default Button;
