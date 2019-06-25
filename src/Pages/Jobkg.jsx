import React, { Component } from "react";
import Filters from "../Components/Filters/Filters";
import Table from "../Components/Table/Table";
import * as Constants from "../Services/constants";
import ReactTable from "react-table";

class Job extends Component {
  state = {
    sortedPeople: []
  };

  render() {
    return (
      <div>
        <Filters />
        <Table headers={Constants.headers} data={Constants.data} />
        <ReactTable columns={Constants._headers} data={Constants._data}/>
      </div>
    );
  }
}

export default Job;
