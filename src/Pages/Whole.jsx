import React, { Component } from "react";
import Table from "../Components/Table/Table"
import Filters from "../Components/Filters/Filters";
import * as Constants from "../Services/constants";

class Job extends Component {
    state = {
        sortedPeople: []
    }

    render() {
        return (
            <div>
                <Filters />
                <Table headers={Constants._headers} data={Constants._data}/>
            </div>
        );
    }
}

export default Job;