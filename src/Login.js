import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { useAuth0 } from "@auth0/auth0-react";
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button'

//change line 13
const LoginButton = () => {

  const { loginWithRedirect } = useAuth0();

  return <Button variant="primary" onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default withAuth0(LoginButton);
