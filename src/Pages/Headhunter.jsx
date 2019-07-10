import React, { Component } from 'react';
import Table from '../Components/Table/Table';
import Filters from '../Components/Filters/Filters';
import * as Constants from '../Constants/constants';
import { setUsersAC } from '../redux/user-reducer';
import { connect } from 'react-redux';
import Search from '../Components/Search/Search';
import * as Services from "../Services/basicServices";

class HeadHunter extends Component {

  componentDidMount() {
    Services.fetchJson(Constants.URL_HH).then(data =>
        this.props.setUsers(data.content)
    );
  }

  async doSearch(value) {
    if (!value || value === ' ') {
      let data = await Services.fetchJson(Constants.URL_HH);
      this.props.setUsers(data.content);
    } else {
      let data = await Services.fetchJson(`${Constants.URL_HH}&fullName=${value}`);
      this.props.setUsers(data.content);
    }
  }

  render() {
    return (
      <div>
        <Filters url={Constants.URL_HH}/>
        <Search onSearch={value => this.doSearch(value)}/>
        <Table columns={Constants.COLUMNS} data={this.props.users} />
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
)(HeadHunter);
