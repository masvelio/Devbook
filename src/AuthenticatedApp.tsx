import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

import Navigation from './components/Navigation/Navigation';
import DevelopersLoading from './components/Developers/DevelopersLoading';

const Profile = React.lazy(() => import('./components/Profile/Profile'));
const Developers = React.lazy(
  () => import('./components/Developers/Developers')
);
const DeveloperDetails = React.lazy(
  () => import('./components/Developers/DeveloperDetails')
);

const AuthenticatedApp = () => (
  <>
    <Navigation />
    <Container maxW="container.lg">
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/developers/:id" component={DeveloperDetails} />
        <React.Suspense fallback={<DevelopersLoading />}>
          <Route exact path="/developers" render={() => <Developers />} />
        </React.Suspense>
      </Switch>
    </Container>
  </>
);

export default AuthenticatedApp;
