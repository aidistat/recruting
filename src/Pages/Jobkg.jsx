import React, { Component } from "react";
import Filters from "../Components/Filters/Filters";
import Table from "../Components/Table/Table";
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
            <div>
                <Filters />
                <Table headers={myConst.headers}/>
            </div>
        );
    }
}

export default Job;