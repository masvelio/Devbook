import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

const Nav = () => <h1>NAV</h1>;
const Dashboard = () => <h1>Dashboard</h1>;

const AuthenticatedApp = () => (
    <>
      <h1>Authenticated app ✅</h1>
      <Switch>
        <Route exact path="/nav" component={Nav} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );

export default AuthenticatedApp;
