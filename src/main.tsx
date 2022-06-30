import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { FronteggProvider } from '@frontegg/react'

require('dotenv').config({ path: '../SECRETS.env' });

const contextOptions = {
  baseUrl: 'https://app-oc47yzscu6g0.frontegg.com',
  clientId: process.env.FRONTEGG_CLIENT_ID
}

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
      <App />
    </FronteggProvider>
  </React.StrictMode>
);