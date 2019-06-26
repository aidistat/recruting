import React, { Component } from 'react';
import 'react-table/react-table.css';
import usersContainer from "./usersContainer";
import Users from "./Users";
import ReactTable from "react-table";

class Table extends Component {
  render() {
    let { columns, data } = this.props;

    return (
      <ReactTable columns={columns} data={data} showPagination={false} defaultPageSize={10} />
    );
  }
}

export default Table;
