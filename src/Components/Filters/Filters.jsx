import React, { Component } from "react";
import './filters.css';
import Select from "../Select/Select";
import Calendar from "../Calendar/Calendar";
import Button from "../Button/Button";
import Table from "../Table/Table";

class Filters extends Component {
    state = {
        people: [
            {
                name: 'John',
                language: 'Python',
                date: '06/12/2019',
                status:'Checked'
            },
            {
                name: 'Jack',
                language: 'Python',
                date: '05/11/2019',
                status:'Not Checked'
            },
            {
                name: 'Jeremy',
                language: 'Java',
                date: '04/22/2019',
                status:'Not Checked'
            },
            {
                name: 'Joe',
                language: 'C#',
                date: '07/12/2019',
                status:'Checked'
            }
        ],
        sortedPeople: []
    }

    componentWillMount() {
        this.setState({
            sortedPeople: this.state.people
        })
    }

    sortByLang = (e) => {
        let { people } = this.state;
        let arr = people.filter((el) => {
            if (el.language.toLowerCase() === e.target.value.toLowerCase()) {
                return 1;
            } else if(e.target.value === "") {
                return 1;
            } else {
                return 0;
            }
        })
        this.setState({sortedPeople: arr})
    }

    sortByStatus = (e) => {
        let { people } = this.state;
        let arr = people.filter((el) => {
            if (el.status.toLowerCase() === e.target.value.toLowerCase()) {
                return 1;
            } else if(e.target.value === "") {
                return 1;
            } else {
                return 0;
            }
        });
        this.setState({sortedPeople: arr})
    }

    sortByDate = () => {
        let { people } = this.state;
        let dateFrom = new Date(document.getElementById("dateFrom").value).getTime();
        let dateTo = new Date(document.getElementById("dateTo").value).getTime();
        if(dateTo < dateFrom) {
            alert("ERROR!")
        }
        let arr = people.filter((el) => {
            let date = new Date(el.date).getTime();
            if(date > dateFrom && date < dateTo) {
                return 1;
            } else return 0;
        });
        this.setState({sortedPeople: arr});
    }

    render() {
        let statuses = ["Checked", "Not Checked"];
        let tech = ["JavaScript", "Python", "Java", "Project Manager", "QA Engineer", "C#"];
        return (
            <div className="filters">
                <span>Profile</span>
                <Select
                    onchange={this.sortByLang}
                    options={tech}
                />
                <span>from</span>
                <Calendar id="dateFrom" />
                <span>to</span>
                <Calendar id="dateTo" />
                <span>Status</span>
                <Select
                    onchange={this.sortByStatus}
                    options={statuses}
                />
                <Button
                    text="Apply"
                    onclick={this.sortByDate}
                />
                <Table
                    people={this.state.sortedPeople}
                    columns={this.props.columns}
                />
            </div>
        );
    }
}

export default Filters;