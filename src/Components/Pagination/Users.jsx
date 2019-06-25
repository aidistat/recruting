import React, { Component } from "react";
import './pagination.css';

class Users extends Component {
    componentDidMount() {
        fetch("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <ul className="pages">
                <li>&#60;</li>
                <li className="current"></li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>&#62;</li>
            </ul>
        );
    }
}

export default Users;
