import React, { Component } from "react";
import styled from 'styled-components';
let moment = require('moment');

let Cal = styled.input`
    width: 130px;
    height: 30px;
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
        let { onchange, } = this.props;
        return (
            <Cal type="date" onChange={(e) => this.bind('date', e)} value={moment(date).isValid && moment(date).format("YYYY-MM-DD") }></Cal>
        );
    }
}

export default Calendar;