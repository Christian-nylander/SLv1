import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Containers/Home';


export default () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
  </BrowserRouter>
)
