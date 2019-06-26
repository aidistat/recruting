import React, { Component } from "react";
import "./chart.css"

class Chart extends Component {
    render() {
        return (
            <div className="Chart">
                <div id="1">
                    <p>Обзвонено</p>
                </div>
                <div id="2">
                    <p>Приглашено на собеседование   {'5'}</p>
                </div>
                <div id="3">
                    <p>В ожидании</p>
                </div>
                <div id="4">
                    <p>отказ</p>
                </div>
                <div id="5">
                    <p>Принято</p>
                </div>
            </div>
        )
    }
}

export default Chart;