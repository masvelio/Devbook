import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Heading } from '@chakra-ui/react';

import Navigation from './components/Navigation/Navigation';

const Profile = React.lazy(() => import('./components/Profile/Profile'));
const Developers = React.lazy(
  () => import('./components/Developers/Developers')
);

const Jobs = () => <Heading my={6}>Jobs</Heading>;

const AuthenticatedApp = () => (
  <>
    <Navigation />
    <Container maxW="container.lg">
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/developers" component={Developers} />
        <Route exact path="/jobs" component={Jobs} />
      </Switch>
    </Container>
  </>
);

export default AuthenticatedApp;
