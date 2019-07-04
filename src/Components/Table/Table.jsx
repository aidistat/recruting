import React, { Component } from 'react';
import 'react-table/react-table.css';
import ReactTable from 'react-table';
import { setUsersAC, setUsersTotalCountAC } from '../../redux/user-reducer';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';
import './table.css';
import Tooltip from '@material-ui/core/Tooltip';

class Table extends Component {
  state = {
    pageNumber: 1
  };
  pageChanged = async pageNumber => {
    this.setState({
      pageNumber: pageNumber
    });
    const response = await fetch(
      `https://localhost:8081/summary?page=${pageNumber}`
    );
    const json = await response.json();
    this.props.setUsers(json.content);
  };
  render() {
    let { columns, data } = this.props;

    data = data.map(item => {
      return {
        ...item,
        test: <button onClick={() => console.log(item)}>test</button>
      };
    });

    return (
      <div className="table-wrapper">
        <ReactTable
          columns={columns}
          data={data}
          defaultPageSize={10}
          showPagination={false}
        />
        <Pagination
          firstPageText={<Tooltip title="First" placement="top"><span>&laquo;</span></Tooltip>}
          prevPageText={<Tooltip title="Prev" placement="top"><span>&lt;</span></Tooltip>}
          nextPageText={<Tooltip title="Next" placement="top"><span>&gt;</span></Tooltip>}
          lastPageText={<Tooltip title="Last" placement="top"><span>&raquo;</span></Tooltip>}
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
