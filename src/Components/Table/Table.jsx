import React, { Component } from 'react';
import '../../react-table.css';
import ReactTable from 'react-table';
import {
  setCurrentPageAC,
  setUsersAC
} from '../../redux/user-reducer';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';
import './table.css';
import Tooltip from '@material-ui/core/Tooltip';
import * as Services from '../../Services/basicServices';

function PaginationTooltip(props) {
  const {title, icon, placement = 'top'} = props;
  return (
      <Tooltip title={title} placement={placement}>
        <span>{icon}</span>
      </Tooltip>
  )
}

class Table extends Component {
  pageChanged = async pageNumber => {
    await this.props.setCurrentPage(pageNumber);
    const data = await Services.fetchJson(
      `${this.props.url}page=${pageNumber - 1}`
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
          defaultPageSize={this.props.pageSize}
          showPagination={false}
        />
        <Pagination
          firstPageText={<PaginationTooltip title="First" icon="&laquo;"/>}
          prevPageText={<PaginationTooltip title="Prev" icon="&lt;"/>}
          nextPageText={<PaginationTooltip title="Next" icon="&gt;"/>}
          lastPageText={<PaginationTooltip title="Last" icon="&raquo;"/>}
          innerClass="pagination"
          itemClassFirst="first"
          itemClassLast="last"
          activeClass="activePage"
          activePage={this.props.currentPage}
          itemsCountPerPage={this.props.pageSize}
          totalItemsCount={this.props.totalUsersCount}
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
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUsers: users => dispatch(setUsersAC(users)),
    setCurrentPage: pageNumber => dispatch(setCurrentPageAC(pageNumber))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
