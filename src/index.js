import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";



ReactDOM.render(
  <React.StrictMode>
    {/* Wrap every component in auth0.*/}
    <Auth0Provider
      domain="dev-vb6a1x5t.us.auth0.com"
      clientId="CMgMJWkAdpZC0e3LeLigDCDbd2gFH3Us"
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
