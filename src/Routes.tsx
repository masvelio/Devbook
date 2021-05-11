import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

const Login = React.lazy(() => import('./components/Login'));

const Comp = () => <h1>component</h1>;

export const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route path="/" component={Comp} />
  </Switch>
);
