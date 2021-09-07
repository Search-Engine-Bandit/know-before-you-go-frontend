import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import { withAuth0 } from '@auth0/auth0-react';

import Login from './Login';
import Logout from './Logout';

class Header extends React.Component {
  render() {
    return (
        <Navbar id='nav-bar' collapseOnSelect  fixed="top" expand="lg" bg="primary" variant="dark">

          <Navbar.Brand>Know Before You Go</Navbar.Brand>
          <Link class='links' to="/">Home</Link>
          <Link class='links' to="/about-us">About Us</Link>
          {this.props.auth0.isAuthenticated ?
            <>
              <Link class='links' to="/profile">My Profile</Link>
              <Link class='links' to="/search">Search</Link>
              <Logout id='login-logout'class='links'/>
            </>
            : <Login id='login-logout' class='links'/>}

        </Navbar>


    )
  }
}

export default withAuth0(Header);
