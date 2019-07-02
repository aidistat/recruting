import React, { Component } from 'react';
import './filters.css';
import Select from '../Select/Select';
import Calendar from '../Calendar/Calendar';
import Button from '../Button/Button';
import * as Constants from '../../Constants/constants';
import {setUsersAC} from "../../redux/user-reducer";
import {connect} from "react-redux";

class Filters extends Component {
  state = {
    sortedPeople: []
  };
fetch = async () => {
    const response = await fetch(
        `https://social-network.samuraijs.com/api/1.0/users`
    );
    const json = await response.json();
    this.props.setUsers(json.items);
};
  render() {
    return (
      <div className="filters">
        <div className="profile">
          <span>Profile</span>
          <Select onchange={this.sortByLang} options={Constants.TECHNOLOGIES} />
        </div>
        <div className="dates">
          <span>from</span>
          <Calendar id="dateFrom" />
          <span>to</span>
          <Calendar id="dateTo" />
        </div>
        <div className="status">
          <span>Status</span>
          <Select onchange={this.sortByStatus} options={Constants.STATUS} />
        </div>
        <Button text="Apply" onClick={this.fetch} />
      </div>
    );
  }
}

let mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount
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
