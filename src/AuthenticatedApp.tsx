import React from 'react';
import {
  Switch,
  Route,
  // Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';

import Navigation from './components/Navigation/Navigation';
import DevelopersLoading from './components/Developers/DevelopersLoading';
import Loading from './components/Loading';

const Profile = React.lazy(() => import('./components/Profile/Profile'));
const Developers = React.lazy(
  () => import('./components/Developers/Developers')
);
const DeveloperDetails = React.lazy(
  () => import('./components/Developers/DeveloperDetails')
);

const createApolloClient = (authToken: string) =>
  new ApolloClient({
    link: new HttpLink({
      uri: 'https://devbook.hasura.app/v1/graphql',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }),
    cache: new InMemoryCache(),
  });

const AuthenticatedApp = ({ idToken }: { idToken: string }) => {
  const client = createApolloClient(idToken);

  return (
    <ApolloProvider client={client}>
      <Router>
        <Navigation />
        <Container maxW="container.lg">
          <Switch>
            <React.Suspense fallback={<Loading />}>
              <Route exact path="/profile" component={Profile} />
              <Route
                exact
                path="/developers/:id"
                component={DeveloperDetails}
              />
              <React.Suspense fallback={<DevelopersLoading />}>
                <Route exact path="/developers" render={() => <Developers />} />
              </React.Suspense>
            </React.Suspense>
          </Switch>
        </Container>
      </Router>
    </ApolloProvider>
  );
};

export default AuthenticatedApp;
