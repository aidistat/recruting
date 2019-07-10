import React, { Component } from 'react';
import '../../react-table.css';
import ReactTable from 'react-table';
import { setUsersAC, setUsersTotalCountAC } from '../../redux/user-reducer';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';
import './table.css';
import Tooltip from '@material-ui/core/Tooltip';
import * as Services from '../../Services/basicServices';
import * as Constants from '../../Constants/constants';

class Table extends Component {
  state = {
    pageNumber: 1
  };

  pageChanged = async pageNumber => {
    this.setState({
      pageNumber: pageNumber
    });
    const data = await Services.fetchJson(
      `${Constants.URL}?page=${pageNumber - 1}`
    );
    this.props.setUsers(data.content);
  };

  render() {
    let { columns, data } = this.props;
    return (
      <div className="table-wrapper">
        <ReactTable
          columns={columns}
          data={data}
          defaultPageSize={10}
          showPagination={false}
        />
        <Pagination
          firstPageText={
            <Tooltip title="First" placement="top">
              <span>&laquo;</span>
            </Tooltip>
          }
          prevPageText={
            <Tooltip title="Prev" placement="top">
              <span>&lt;</span>
            </Tooltip>
          }
          nextPageText={
            <Tooltip title="Next" placement="top">
              <span>&gt;</span>
            </Tooltip>
          }
          lastPageText={
            <Tooltip title="Last" placement="top">
              <span>&raquo;</span>
            </Tooltip>
          }
          innerClass="pagination"
          itemClassFirst="first"
          itemClassLast="last"
          activeClass="activePage"
          activePage={this.state.pageNumber}
          itemsCountPerPage={10}
          totalItemsCount={197}
          onChange={pageNumber => this.pageChanged(pageNumber)}
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
    setUsersTotalCount: count => {
      dispatch(setUsersTotalCountAC(count));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
