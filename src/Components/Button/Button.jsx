import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  render() {
    let { text, onClick, disabled } = this.props;
    return (
      <button disabled={disabled} className="button" onClick={onClick} size="small">
        {text}
      </button>
    );
  }
}

export default Button;
