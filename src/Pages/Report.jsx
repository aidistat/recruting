import React, { Component } from "react";
import Calendar from "../Components/Calendar/Calendar";
import Button from "../Components/Button/Button"
import SelectDates from "../Components/Report/SelectDates/SelectDates"
import Chart from "../Components/Report/Chart/Chart"

class Report extends Component {

    render() {
        return (
            <div>
                <SelectDates />
                <Chart />
            </div>
        )
    }
}

export default Report