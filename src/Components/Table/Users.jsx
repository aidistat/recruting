import React, { Component } from "react";
import { setUsersAC } from "../../redux/user-reducer"
import {connect} from "react-redux";
import * as Constants from '../../Constants/constants';


class Users extends Component {

    render() {
        return (
            <div>
                <ul className="pages">
                    <li>&#60;</li>
                    <li className="current">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>&#62;</li>
                </ul>
            </div>

        );
    }
}

export default Users;
