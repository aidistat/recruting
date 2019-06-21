import React, { Component } from "react";
import Table from "../Components/Table/Table"
import Filters from "../Components/Filters/Filters";
import * as myConst from "../Services/constants";

class Job extends Component {
    state = {
        sortedPeople: []
    }
    componentWillMount() {
        this.setState({
            sortedPeople: myConst._data
        })
    }
    render() {
        return (
            <Filters />
        );
    }
}

export default Job;