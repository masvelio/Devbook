import * as React from 'react';
import { CircularProgress, Flex } from '@chakra-ui/react';

import { useAuth } from './context/authContext';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

export const Routes = () => {
  const { user } = useAuth();
  return (
    <React.Suspense
      fallback={
        <Flex justify="center" align="center" h="100vh">
          <CircularProgress isIndeterminate color="blue.500" />
        </Flex>
      }
    >
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
};
