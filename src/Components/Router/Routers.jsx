import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ROUTES } from '../../Constants/constants';

class Routers extends Component {
  render() {
    return (
      <Router>
        {ROUTES.map((route, i) => {
          return <Route key={i} path={route.path} component={route.component} />;
        })}



      </Router>
    );
  }
}

export default Routers;
