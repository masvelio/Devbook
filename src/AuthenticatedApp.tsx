import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';

const Nav = () => <h1>NAV</h1>;
const Dashboard = () => <h1>Dashboard</h1>;

const AuthenticatedApp = () => (
  <>
    <Navigation />
    <h1>Authenticated app ✅</h1>
    <Switch>
      <Route exact path="/nav" component={Nav} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </>
);

export default AuthenticatedApp;
