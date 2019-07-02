import React, { Component } from 'react';
import 'react-table/react-table.css';
import ReactTable from 'react-table';
import { setUsersAC, setUsersTotalCountAC } from '../../redux/user-reducer';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';
import './table.css';

class Table extends Component {
  state = {
    pageNumber: 1
  };
  pageChanged = async pageNumber => {
    this.setState({
      pageNumber: pageNumber
    });
    const response = await fetch(
      `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}`
    );
    const json = await response.json();
    this.props.setUsers(json.items);
  };
  render() {
    let { columns, data } = this.props;

    data = data.map(item => {
      return {
        ...item,
        test: <button onClick={() => console.log(item)}>test</button>
      };
    });

    console.log(data);

    return (
      <div>
        <ReactTable
          columns={columns}
          data={data}
          defaultPageSize={10}
          showPagination={false}
        />
        <Pagination
          innerClass="pagination"
          itemClassFirst="first"
          itemClassLast="last"
          activeClass="active"
          activePage={this.state.pageNumber}
          itemsCountPerPage={10}
          totalItemsCount={197}
          onChange={pageNumber => this.pageChanged(pageNumber)}
        />
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
    },
    setUsersTotalCount: count => {
      dispatch(setUsersTotalCountAC(count));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
