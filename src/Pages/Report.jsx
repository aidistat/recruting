import React, { Component } from "react";
import SelectDates from "../Components/Report/SelectDates/SelectDates"
import Chart from "../Components/Report/Chart/Chart"
import Vacncy from "../Components/Report/Vacancy/Vacancy"
import Source from "../Components/Report/Source/Source"
import LanguagesList from "../Components/Report/LanguagesList/LanguagesList"
import Comments from "../Components/Report/Comments/Comments"
import DownloadXLSX from "../Components/Report/GenerateXLSX/Downloads"

class Report extends Component {
    state = {
        interval: {
            startDate: "29.01.01",
            endDate: "29.01.01"
        },
        jobkg: {
            java: "12",
            python: "10",
            javaScript: "5",
            c: "1",
            pm: "5",
            qa: "4"
        },
        hh: {
            java: "12",
            python: "10",
            javaScript: "5",
            c: "1",
            pm: "5",
            qa: "4"
        },
        zensoftio: {
            java: "12",
            python: "10",
            javaScript: "5",
            c: "1",
            pm: "5",
            qa: "4"
        }
    }
    render() {
        if (this.state) {
            return (
                <div>
                    <Chart />
                    <Vacncy />
                    <Source />
                    <LanguagesList />
                    <Comments />
                    <DownloadXLSX
                        dates={this.state}
                    />
                </div>
            )
        }else{
            return(
                <SelectDates />
            )
        }
    }
}

export default Report