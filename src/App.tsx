import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';

import Navigation from './components/Navigation/Navigation';
import DevelopersLoading from './components/Developers/DevelopersLoading';
import Loading from './components/Loading';

const Profile = React.lazy(() => import('./components/Profile/Profile'));
const Login = React.lazy(() => import('./components/Login'));
const Developers = React.lazy(
  () => import('./components/Developers/Developers')
);
const DeveloperDetails = React.lazy(
  () => import('./components/Developers/DeveloperDetails')
);

const App = () => {
  const { isLoading, error, isAuthenticated } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      {isAuthenticated && <Navigation />}
      <Container maxW="container.lg">
        <Switch>
          <React.Suspense fallback={<Loading />}>
            <Route exact path="/" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/developers/:id" component={DeveloperDetails} />
            <React.Suspense fallback={<DevelopersLoading />}>
              <Route exact path="/developers" render={() => <Developers />} />
            </React.Suspense>
          </React.Suspense>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
