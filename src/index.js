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
      domain="dev-ltf4fjmp41avqmox.us.auth0.com"
      clientId="eDZk3wMbeWK9HLFFGqRtEcWp1oFYJGao"
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
