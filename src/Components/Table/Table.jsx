import React, { Component } from 'react';
import './table.css';

class Table extends Component {
  render() {
    let { headers, data } = this.props;

    return (
      <div className="table">
        <div className="headers">
          {headers.map((head, i) => {
            return (
              <div key={i} className="headcell">
                {head.title}
              </div>
            );
          })}
        </div>
        {data.map((item, i) => {
          return (
            <div key={i} className="row">
              {headers.map((head, index) => {
                return (
                  <div key={index} className="cell">
                    {item[head.key]}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Table;
