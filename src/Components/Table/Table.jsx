import React, {Component} from "react";
import './table.css';
import Select from "../Select/Select"

class Table extends Component {

    render() {
        let {people, onclick, columns} = this.props;
        let statuses = ["Pending", "Applied", "Rejected", "Interview"];
        return (
            <table>
                {columns === '4' &&
                <tr>
                    <th onClick={onclick}>Name</th>
                    <th>Language</th>
                    <th>Date</th>
                    <th>Status</th>
                </tr>
                }
                {columns === '4' &&
                    people.map(person => {
                        return (
                            <tr>
                                <td>{person.name}</td>
                                <td>{person.language}</td>
                                <td>{person.date}</td>
                                <td>{person.status}</td>
                            </tr>
                    )
                })
                }
                {columns === '5' &&
                <tr>
                    <th onClick={onclick}>Name</th>
                    <th>Language</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Statuses</th>
                </tr>
                }
                {columns === '5' &&
                    people.map(person => {
                        return (
                            <tr>
                                <td>{person.name}</td>
                                <td>{person.language}</td>
                                <td>{person.date}</td>
                                <td>{person.status}</td>
                                <td><Select options={statuses}/></td>
                            </tr>
                        )
                    })
                }
            </table>
        );
    }
}

export default Table;