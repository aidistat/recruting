import React, { Component } from 'react';
import './filters.css';
import Select from '../Select/Select';
import Calendar from '../Calendar/Calendar';
import Button from '../Button/Button';
import * as Constants from '../../Constants/constants';
import { setUsersAC } from '../../redux/user-reducer';
import { connect } from 'react-redux';

class Filters extends Component {
  state = {

  };

  bind = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  };

  applyFilters = () => {
      let url = "http://localhost:8081/summary?"
      const keys = Object.keys(this.state)
      keys.map((item, i) => {
          url = url + keys[i] + '=' + this.state[keys[i]] + "&";
      })
      fetch(url)
          .then(response => response.json())
          .then(data => this.props.setUsers(data.content))
  }

  render() {
    return (
      <div className="filters">
        <div className="profile">
          <Select
            onChange={e => {
              this.bind('profile', e);
            }}
            options={Constants.TECHNOLOGIES}
            title="Profile"
          />
        </div>
        <Calendar
          id="dateFrom"
          label="Date From"
          onChange={e => {
            this.bind('startDate', e);
          }}
        />
        <Calendar
          id="dateTo"
          label="Date To"
          onChange={e => {
            this.bind('endDate', e);
          }}
        />
        <div className="status">
          <Select
            onChange={e => {
              this.bind('checked', e);
            }}
            options={Constants.STATUS}
            title="Checked"
          />
        </div>
        <Button text="Apply" onClick={this.applyFilters}/>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users
  };
};

let mapDispatchToProps = dispatch => {
  return {
    setUsers: users => {
      dispatch(setUsersAC(users));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
