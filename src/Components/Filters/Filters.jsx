import React, { Component } from 'react';
import './filters.css';
import Select from '../Select/Select';
import Calendar from '../Calendar/Calendar';
import Button from '../Button/Button';
import * as Constants from '../../Constants/constants';
import { setPositionsAC, setUsersAC } from '../../redux/user-reducer';
import { connect } from 'react-redux';
import * as Services from '../../Services/basicServices';

class Filters extends Component {
  componentDidMount() {
    Services.fetchJson(Constants.URL_POSITION).then(data => {
      this.props.setPosition(data);
    });
  }

  bind = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  };

  applyFilters = async () => {
    let url = this.props.url;
    const keys = Object.keys(this.state);
    keys.map((item, i) => {
      if (this.state[keys[i]].length !== 0) {
        url = url + '&' + keys[i] + '=' + this.state[keys[i]];
        return url;
      } else return url;
    });
    let data = await Services.fetchJson(url);
    this.props.setUsers(data.content);
  };

  render() {
    return (
      <div className="filters">
        <div className="profile">
          <Select
            onChange={e => {
              this.bind('profile', e);
            }}
            options={this.props.positions}
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
            options={Constants.STATUSES}
            title="Checked"
          />
        </div>
        <Button text="Apply" onClick={this.applyFilters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    positions: state.usersPage.positions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUsers: users => {
      dispatch(setUsersAC(users));
    },
    setPosition: positions => {
      dispatch(setPositionsAC(positions));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
