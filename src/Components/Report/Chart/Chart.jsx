import React, { Component } from "react";
import "./chart.css"

class Chart extends Component {
    getTotalSumm = (obj) => {
        const keysArray = Object.keys(obj);
        let totalArray = keysArray.map((key) => {
            if (obj[key]) {
                return obj[key];
            }
        })
        const resultSumm = totalArray.reduce((a, b) => a + b)

        return resultSumm;
    }
    render() {
        return (
            <div className="Chart">
            {console.log(this.props)}
                <div className="Phoned">
                    <p>Обзвонено {this.getTotalSumm(this.props.statuses.phoned)}</p>
                </div>
                <div className="Interview">
                    <p>Приглашено на собеседование   {this.getTotalSumm(this.props.statuses.interview)}</p>
                </div>
                <div className="Pending">
                    <p>В ожидании {this.getTotalSumm(this.props.statuses.pending)}</p>
                </div>
                <div className="Failure">
                    <p>отказ  {this.getTotalSumm(this.props.statuses.failure)}</p>
                </div>
                <div className="Recruited">
                    <p>Принято   {this.getTotalSumm(this.props.statuses.recruited)}</p>
                </div>
            </div>
        )
    }
}

export default Chart;