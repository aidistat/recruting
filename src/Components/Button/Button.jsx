import React, { Component } from 'react';
import "./button.css";

class Button extends Component {
  render() {
    let { text, onClick } = this.props;
    return (
      <button className="button" onClick={onClick} size='small'>
        {text}
      </button>
    );
  }
}

export default Button;
