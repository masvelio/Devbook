import * as React from 'react';
import { useAuth } from './context/authContext';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

export const Routes = () => {
  const { user } = useAuth();
  return (
    <React.Suspense fallback="loading...">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
};
