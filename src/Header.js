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
      <Navbar id='nav-bar' collapseOnSelect fixed="top" expand="lg" bg="primary" variant="dark">
        <Navbar.Brand className='links'>Know Before You Go</Navbar.Brand>
        <Link className='links' to="/">Home</Link>
        <Link className='links' to="/about-us">About Us</Link>
        {this.props.auth0.isAuthenticated ?
          <>
            <Link className='links' to="/profile">My Profile</Link>
            <Link className='links' to="/search">Search</Link>
            <Logout id='login-logout' className='links' />
          </>
          : <Login id='login-logout' className='links' />}
      </Navbar>


    )
  }
}

export default withAuth0(Header);
