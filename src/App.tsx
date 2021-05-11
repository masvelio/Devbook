import * as React from 'react';

import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from './context/authContext';
import { ErrorBoundary } from './ErrorBoundary';
import { Routes } from './Routes';

export const App = () => (
  <React.StrictMode>
    <AuthProvider value={{ value: 'something' }}>
      <ChakraProvider theme={theme}>
        <ColorModeScript />
        <Router>
          <ErrorBoundary>
            <React.Suspense fallback="loading....">
              <Routes />
            </React.Suspense>
          </ErrorBoundary>
        </Router>
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>
);
