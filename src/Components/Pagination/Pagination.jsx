import React, { Component } from "react";
import './pagination.css';

class Pagination extends Component {
    render() {
        let { text, onclick } = this.props;
        return (
            <button onClick={onclick}>{text}</button>
        );
    }
}

export default Pagination;
