import React, { Component } from "react";
import './pagination.css';
import * as Constants from "../../Constants/constants";

class Pagination extends Component {
    state = {
        sortedPeople: []
    }

    render() {
        return (
            <ul className="pages">
                <li>&#60;</li>
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

export default Pagination;