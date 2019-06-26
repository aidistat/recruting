import React, { Component } from 'react';
import Filters from '../Components/Filters/Filters';
import Table from '../Components/Table/Table';
import * as Constants from '../Constants/constants';
import {setUsersAC} from "../redux/user-reducer";
import {connect} from "react-redux";

class JobKg extends Component {

    componentDidMount() {
        // this.props.setUsers(Constants.PEOPLE)
        fetch('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => response.json())
            .then(data => this.props.setUsers(data.items))
    }

  render() {
    return (
      <div>
        <Filters />
        <Table columns={Constants.TEST} data={this.props.users} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobKg);
