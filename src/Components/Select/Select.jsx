import React, { Component } from "react";
import './select.css';

class Select extends Component {

    render() {
        let { onchange, options } = this.props;
        return (
            <select className="selection" onChange={onchange}>
                <option></option>
                {
                    options.map(option => {
                        return(
                            <option>{option}</option>
                        )
                    })
                }
            </select>
        );
    }
}

export default Select;