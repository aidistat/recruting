import React, { Component } from "react";
import Calendar from "../../Calendar/Calendar";
import Button from "../../Button/Button"


class SelectDates extends Component {
    generateReport(){
        console.log("click")
    }
    render() {
        return (
            <div className="DatesFromReport">
                <span>Период:</span>
                <Calendar id="startDate" />
                <span> - </span>
                <Calendar id="endBate" />
                <Button
                text="generate"
                onclick={this.generateReport}
                />
            </div>
        )
    }
}

export default SelectDates