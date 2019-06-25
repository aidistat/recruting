import React, { Component } from "react";
import "./table.css";

class Table extends Component {
  render() {
    let { headers, data } = this.props;

    return (
      <div className="table">
        <div className="headers">
          {headers.map(head => {
            return <div className="headcell">{head.title}</div>;
          })}
        </div>
        {data.map(item => {
          return (
            <div className="row">
              {headers.map(head => {
                return <div className="cell">{item[head.key]}</div>;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Table;
