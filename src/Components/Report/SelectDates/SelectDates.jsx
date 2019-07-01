import React, { Component } from "react";
import { connect } from "react-redux";
import Calendar from "../../Calendar/Calendar";
import Button from "../../Button/Button"
import reportThunk from "../../../redux/report/report-thunk"


class SelectDates extends Component {
    generateReport = () => {
        this.props.generateReport('fdgds')
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
                    onClick={this.generateReport}
                />
            </div>
        )
    }
}

const mapDispatchToProps = { generateReport: reportThunk }

export default connect(null, mapDispatchToProps)(SelectDates);

// export default SelectDates