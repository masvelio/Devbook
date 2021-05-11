import * as React from 'react';

import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from './context/authContext';
import { ErrorBoundary } from './ErrorBoundary';
import { Routes } from './Routes';

export const App = () => (
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <Router>
        <ErrorBoundary>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </ErrorBoundary>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
