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
                <div className="profile">
                    <span>Profile</span>
                    <Select
                        onchange={this.sortByLang}
                        options={Constants.tech}
                    />
                </div>
                <div className="dates">
                    <span>from</span>
                    <Calendar id="dateFrom" />
                    <span>to</span>
                    <Calendar id="dateTo" />
                </div>
                <div className="status">
                    <span>Status</span>
                    <Select
                        onchange={this.sortByStatus}
                        options={Constants.status}
                    />
                </div>
                <Button
                    text="Apply"
                    onclick={this.sortByDate}
                />
            </div>
        );
    }
}

export default Filters;