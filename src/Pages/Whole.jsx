import React, { Component } from 'react';
import Table from '../Components/Table/Table';
import Filters from '../Components/Filters/Filters';
import * as Constants from '../Constants/constants';
import {
  setTotalUsersCountAC,
  setCurrentPageAC,
  setUsersAC
} from '../redux/user-reducer';
import { connect } from 'react-redux';
import Search from '../Components/Search/Search';
import AlertDialog from '../Components/PopupNewVacancy/NewVacancy';
import * as Services from '../Services/basicServices';

class Whole extends Component {
  componentDidMount() {
    Services.fetchJson(Constants.URL).then(data => {
      this.props.setUsers(data.content);
      this.props.setTotalUsersCount(data.totalElements);
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Filters />
        <div className="func">
          <Search />
          <AlertDialog />
        </div>
        <Table
          columns={Constants.COLUMNS_WHOLEDB}
          data={this.props.users}
          url={Constants.URL}
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
    },
    setCurrentPage: pageNumber => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: count => {
      dispatch(setTotalUsersCountAC(count));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Whole);
