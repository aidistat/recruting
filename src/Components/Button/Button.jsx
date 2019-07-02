import React, { Component } from 'react';
import Btn from '@material-ui/core/Button';

class Button extends Component {
  render() {
    let { text, onClick } = this.props;
    return (
      <Btn variant="contained" onClick={onClick} size='small'>
        {text}
      </Btn>
    );
  }
}

export default Button;
