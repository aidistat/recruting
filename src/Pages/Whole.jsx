import React, { Component } from "react";
import Table from "../Components/Table/Table"
import Filters from "../Components/Filters/Filters";

class Job extends Component {
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
    render() {
        return (
            <Filters people={this.state.sortedPeople} columns='5' />
        );
    }
}

export default Job;