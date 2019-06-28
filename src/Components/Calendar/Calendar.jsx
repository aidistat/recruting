import React, { Component } from 'react';
import './calendar.css';
const moment = require('moment');

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
    let { date } = this.state;
    let { id } = this.props;
    return (
      <input
        className="calendar"
        type="date"
        id={id}
        onChange={e => this.bind('date', e)}
        value={moment(date).isValid && moment(date).format('YYYY-MM-DD')}
      />
    );
  }
}

export default Calendar;
