import React, { Component } from "react";
import Table from "../Components/Table/Table"
import Filters from "../Components/Filters/Filters";
import * as myConst from "/home/user/hr_frontend/src/Services/constants";

class Job extends Component {
    state = {
        sortedPeople: []
    }
    componentWillMount() {
        this.setState({
            sortedPeople: myConst.data
        })
    }
    render() {
        return (
            <Filters />
        );
    }
}

export default Job;