import React, {Component} from "react";
import './table.css';

class Table extends Component {

    render() {
        let { headers, data } = this.props;

        return (
            <div className="table">
                {
                    headers.map(head => {
                        return (
                            <div className="headcell">{head.title}</div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Table;