import React, { Component } from "react";
import styled from 'styled-components';
const moment = require('moment');

let Cal = styled.input`
    width: 130px;
    margin: 0 20px 0 10px;
`

class Calendar extends Component {
    state = {
        date: ''
    }

    bind = (field, e) => {
        this.setState({
            [field]: e.target.value
        })
    };

    render() {
        let { date } = this.state;
        let { id } = this.props;
        return (
            <Cal type="date" id={id} onChange={(e) => this.bind('date', e)} value={moment(date).isValid && moment(date).format("YYYY-MM-DD") } ></Cal>
        );
    }
}

export default Calendar;