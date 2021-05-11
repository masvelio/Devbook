import * as React from 'react';

interface IAuthContext {
  user: boolean;
}

const AuthContext = React.createContext({} as IAuthContext);
AuthContext.displayName = 'AuthContext';

const AuthProvider = ({ children }: { children: React.ReactNode }) => (
  <AuthContext.Provider value={{ user: true }}>
    {children}
  </AuthContext.Provider>
);

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
};

export { useAuth, AuthProvider };
