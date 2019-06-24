import React, { Component } from "react";
import './filters.css';
import Select from "../Select/Select";
import Calendar from "../Calendar/Calendar";
import Button from "../Button/Button";
import * as Constants from "../../Services/constants";

class Filters extends Component {
    state = {
        sortedPeople: []
    }

    render() {
        return (
            <div className="filters">
                <span>Profile</span>
                <Select
                    onchange={this.sortByLang}
                    options={Constants.tech}
                />
                <span>from</span>
                <Calendar id="dateFrom" />
                <span>to</span>
                <Calendar id="dateTo" />
                <span>Status</span>
                <Select
                    onchange={this.sortByStatus}
                    options={Constants.status}
                />
                <Button
                    text="Apply"
                    onclick={this.sortByDate}
                />
            </div>
        );
    }
}

export default Filters;