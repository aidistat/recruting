import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ROUTES } from '../../Constants/constants';
import {Switch} from "react-router";

class Routers extends Component {
  render() {
    return (
      <Switch>
        {ROUTES.map((route, i) => {
          return (
            <Route key={i} path={route.path} component={route.component} />
          );
        })}
      </Switch>
    );
  }
}

export default Routers;
