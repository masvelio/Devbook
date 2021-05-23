import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';

import { ErrorBoundary } from './ErrorBoundary';
import App from './App';

const onRedirectCallback = () => {
  window.location.assign(process.env.REACT_APP_CALLBACK_URL || '');
};

const providerConfig = {
  domain: process.env.REACT_APP_DOMAIN || '',
  clientId: process.env.REACT_APP_CLIENT_ID || '',
  ...(process.env.REACT_APP_AUDIENCE
    ? { audience: process.env.REACT_APP_AUDIENCE }
    : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
};

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider {...providerConfig}>
      <ChakraProvider theme={theme}>
        <ColorModeScript />
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ChakraProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
