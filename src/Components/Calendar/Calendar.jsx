import React, { Component } from 'react';
import './calendar.css';
import TextField from "@material-ui/core/TextField";

class Calendar extends Component {
  state = {
    date: ''
  };

  bind = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  };

  render() {
    let { label } = this.props;
    return (
        <TextField
            id="date"
            label={label}
            type="date"
            onChange={(e) => this.bind('date', e)}
            InputLabelProps={{
              shrink: true,
            }}
        />
    );
  }
}

export default Calendar;
