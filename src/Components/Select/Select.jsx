import React, { Component } from "react";
import styled from 'styled-components';


let Sel = styled.select`
    width: 130px;
    margin: 0 20px 0 10px;
`

class Select extends Component {

    render() {
        let { onchange, options } = this.props;
        return (
            <Sel onChange={onchange}>
                <option></option>
                {
                    options.map(option => {
                        return(
                            <option>{option}</option>
                        )
                    })
                }
            </Sel>
        );
    }
}

export default Select;