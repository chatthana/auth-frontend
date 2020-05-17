import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Signin from './pages/signin';

export default () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/signin" />} />
      <Route exact path="/signin" component={Signin} />
    </Switch>
  );
}