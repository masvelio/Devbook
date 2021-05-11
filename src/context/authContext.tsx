import * as React from 'react';

const AuthContext = React.createContext<{ value: string } | null>(null);

AuthContext.displayName = 'AuthContext';

const AuthProvider = (
  props: JSX.IntrinsicAttributes & React.ProviderProps<{ value: string } | null>
) => <AuthContext.Provider value={{ value: 'string' }} {...props} />;

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
};

export { useAuth, AuthProvider };
