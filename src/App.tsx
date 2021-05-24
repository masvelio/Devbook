import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Loading from 'components/Loading';
import AuthenticatedApp from 'components/AuthenticatedApp';
import UnauthenticatedApp from 'components/UnauthenticatedApp';

const App = () => {
  const [idToken, setIdToken] = React.useState<string>();
  const { isLoading, error, isAuthenticated, getAccessTokenSilently } =
    useAuth0();

  React.useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then((data) => setIdToken(data));
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isAuthenticated) {
    if (idToken) {
      return <AuthenticatedApp idToken={idToken} />;
    }
    return <Loading />;
  }

  return <UnauthenticatedApp />;
};

export default App;
