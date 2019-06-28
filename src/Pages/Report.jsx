import React, { Component } from "react";
import SelectDates from "../Components/Report/SelectDates/SelectDates"
import Chart from "../Components/Report/Chart/Chart"
import Vacncy from "../Components/Report/Vacancy/Vacancy"
import CVSources from "../Components/Report/CVSources/CVSources"
import LanguagesList from "../Components/Report/LanguagesList/LanguagesList"
import Comments from "../Components/Report/Comments/Comments"
import DownloadXLSX from "../Components/Report/GenerateXLSX/Downloads"

class Report extends Component {
    state = {
        interval: {
            startDate: "29.01.01",
            endDate: "29.01.01"
        },
        sources: {
            jobkg: {
                // java: 12,
                // python: 10,
                // javaScript: 5,
                c: 1,
                pm: 5,
                qa: 4
            },
            hh: {
                java: 12,
                // python: 10,
                javaScript: 5,
                c: 1,
                pm: 5,
                // qa: 4
            },
            gmail: {
                java: 12,
                python: 10,
                javaScript: 5,
                c: 1,
                pm: 5,
                qa: 4,
            }
        },
        statuses: {
            phoned: {
                java: 12,
                python: 10,
                javaScript: 5,
                // c: 1,
                pm: 5,
                qa: 4
            },
            interview: {
                java: 12,
                python: 10,
                // javaScript: 5,
                c: 1,
                pm: 5,
                qa: 4
            },
            pending: {
                // java: 12,
                python: 10,
                javaScript: 5,
                c: 1,
                pm: 5,
                qa: 4
            },
            failure: {
                java: 12,
                python: 10,
                javaScript: 5,
                c: 1,
                pm: 5,
                qa: 4
            },
            recruited: {
                java: 12,
                python: 10,
                javaScript: 5,
                c: 1,
                pm: 5,
                qa: 4
            }
        }
    }
    render() {
        if (this.state) {
            return (
                <div>
                    <Chart
                        statuses={this.state.statuses}
                     />
                    <Vacncy />
                    <CVSources
                        dates={this.state}
                     />
                    <LanguagesList />
                    <Comments />
                    <DownloadXLSX
                        dates={this.state}
                    />
                </div>
            )
        } else {
            return (
                <SelectDates />
            )
        }
    }
}

export default Report



const a = {
    "dateDto": {
        "startDate": "2019-06-02",
        "endDate": "2019-06-28"
    },
    "vacancyList": [
        {
            "name": "fadsfa",
            "position": {
                "name": "Java",
                "id": 1
            },
            "id": 1
        }
    ],
    "sourcesDtoList": [
        {
            "source": "HH",
            "count": 0,
            "positionCountDtoList": [
                {
                    "count": 0,
                    "position": "Python"
                },
                {
                    "count": 0,
                    "position": "JavaScript"
                },
                {
                    "count": 0,
                    "position": "Java"
                }
            ]
        },
        {
            "source": "JOBKG",
            "count": 5,
            "positionCountDtoList": [
                {
                    "count": 2,
                    "position": "Python"
                },
                {
                    "count": 0,
                    "position": "JavaScript"
                },
                {
                    "count": 3,
                    "position": "Java"
                }
            ]
        },
        {
            "source": "GMAIL",
            "count": 1,
            "positionCountDtoList": [
                {
                    "count": 0,
                    "position": "Python"
                },
                {
                    "count": 0,
                    "position": "JavaScript"
                },
                {
                    "count": 1,
                    "position": "Java"
                }
            ]
        }
    ]
}