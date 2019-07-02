import React, { Component } from 'react';
import './filters.css';
import Select from '../Select/Select';
import Calendar from '../Calendar/Calendar';
import Button from '../Button/Button';
import * as Constants from '../../Constants/constants';

class Filters extends Component {
  state = {
    sortedPeople: []
  };

  render() {
    return (
      <div className="filters">
        <div className="profile">
          <Select onchange={this.sortByLang} options={Constants.TECHNOLOGIES} title="Profile" />
        </div>
          <Calendar id="dateFrom" label="Date From" />
          <Calendar id="dateTo" label="Date To" />
        <div className="status">
          <Select onchange={this.sortByStatus} options={Constants.STATUS} title="Status" />
        </div>
        <Button text="Apply" onclick={this.sortByDate} />
      </div>
    );
  }
}

export default Filters;
