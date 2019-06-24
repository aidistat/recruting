import React, { Component } from "react";
import Filters from "../Components/Filters/Filters";
import Table from "../Components/Table/Table";
import * as Constants from "../Services/constants";


class Job extends Component {
    state = {
        sortedPeople: []
    }

    render() {
        return (
            <div>
                <Filters />
                <Table headers={Constants.headers} data={Constants.data}/>
            </div>
        );
    }
}

export default Job;