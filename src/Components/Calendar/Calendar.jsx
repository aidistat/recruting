import React, { Component } from 'react';
import './calendar.css';
import TextField from '@material-ui/core/TextField';

class Calendar extends Component {
  render() {
    let { label, onChange, value } = this.props;
    return (
      <TextField
        value={value}
        id="date"
        label={label}
        type="date"
        onChange={onChange}
        InputLabelProps={{
          shrink: true
        }}
      />
    );
  }
}

export default Calendar;
