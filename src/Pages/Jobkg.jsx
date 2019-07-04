import React, { Component } from 'react';
import Filters from '../Components/Filters/Filters';
import Table from '../Components/Table/Table';
import * as Constants from '../Constants/constants';
import { setUsersAC } from '../redux/user-reducer';
import { connect } from 'react-redux';
import Search from '../Components/Search/Search';

class JobKg extends Component {
  state = {
    searchResults: []
  };

  async doSearch(value) {
    let response = null;
    if (!value || value === ' ') {
      response = await fetch(`http://localhost:8081/summary`);
      let data = await response.json();
      this.props.setUsers(data.content);
    } else {
      response = await fetch(`http://localhost:8081/summary?fullName=${value}`);
      let data = await response.json();
      this.props.setUsers(data.content);
    }
  }
  componentDidMount() {
    // this.props.setUsers(Constants.PEOPLE)
    fetch('http://localhost:8081/summary')
      .then(response => response.json())
      .then(data => this.props.setUsers(data.content));
  }

  render() {
    return (
      <div>
        <Filters />
        <Search onSearch={value => this.doSearch(value)} />
        <Table columns={Constants.COLUMNS} data={this.props.users} />
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
)(JobKg);