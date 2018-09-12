import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Survey from '.././containers/Survey';

const Router = () => (
  <BrowserRouter basename="/survey-app">
    <Switch>
      <Route exact={true} path="/" component={Survey} />
      <Route exact={true} path="/surveys" component={Survey} />
      <Route exact={true} path="/surveys/:id" component={Survey} />
    </Switch>
  </BrowserRouter>
);

export default Router