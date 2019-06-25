import React, { Component } from 'react';
import Table from '../Components/Table/Table';
import Filters from '../Components/Filters/Filters';
import * as Constants from '../Constants/constants';

class Zensoftio extends Component {
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

export default Zensoftio;
