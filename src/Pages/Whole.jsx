import React, { Component } from 'react';
import Table from '../Components/Table/Table';
import Filters from '../Components/Filters/Filters';
import * as Constants from '../Constants/constants';
import { setUsersAC } from '../redux/user-reducer';
import { connect } from 'react-redux';
import Search from '../Components/Search/Search';
import PupopNewCV from '../Components/PupopNewCV/PupopNewCV';
class Whole extends Component {
  componentDidMount() {
    this.props.setUsers(Constants.PEOPLE);
  }
  render() {
    return (
      <div>
        <Filters />
        <div className="func">
          <Search />
          <PupopNewCV />
        </div>
        <Table
          columns={Constants.COLUMNS_WITH_STATUSES}
          data={this.props.users}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUsers: users => {
      dispatch(setUsersAC(users));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Whole);
