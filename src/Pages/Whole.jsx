import React, { Component } from 'react';
import Table from '../Components/Table/Table';
import Filters from '../Components/Filters/Filters';
import * as Constants from '../Constants/constants';

class Whole extends Component {
  state = {
    sortedPeople: []
  };

  render() {
    return (
      <div>
        <Filters />
        <Table
          headers={Constants.HEADER_WITH_STATUSES}
          data={Constants.ALL_PEOPLE}
        />
      </div>
    );
  }
}

export default Whole;
