import React, { Component } from 'react';
import './diagramm.css';

class Diagramm extends Component {
  render() {
    let { called, pending, applied, rejected, invited } = this.props;
    return (
      <div className="wrapper">
        <div className="called">
          <div className="inner">Called</div>
          <span>{called}</span>
        </div>
        <div className="invited">
          <div className="inner">Invited</div>
          <span>{invited}</span>
        </div>
        <div className="pending">
          <div className="inner">Pending</div>
          <span>{pending}</span>
        </div>
        <div className="rejected">
          <div className="inner">Rejected</div>
          <span>{rejected}</span>
        </div>
        <div className="applied">
          <div className="inner">Applied</div>
          <span>{applied}</span>
        </div>
      </div>
    );
  }
}

export default Diagramm;
