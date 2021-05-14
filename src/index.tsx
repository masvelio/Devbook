import * as React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';

import { ErrorBoundary } from './ErrorBoundary';
import config from './auth_config.json';
import App from './App';

const onRedirectCallback = () => {
  window.location.assign('http://localhost:3000/developers');
};

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
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
