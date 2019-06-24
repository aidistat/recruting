import React, { Component } from 'react';
import Filters from '../Components/Filters/Filters';
import Table from '../Components/Table/Table';
import * as Constants from '../Constants/constants';

class JobKg extends Component {
  state = {
    sortedPeople: []
  };

  render() {
    return (
      <div>
        <Filters />
        <Table headers={Constants.HEADERS} data={Constants.PEOPLE} />
      </div>
    );
  }
}

export default JobKg;
