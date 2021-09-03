import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from "react-router-dom";
import './Header.css';
import { withAuth0 } from '@auth0/auth0-react';

import Login from './Login';
import Logout from './Logout';

class Header extends React.Component {
  render() {
    return(
      <Navbar id='nav-bar' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Know Before You Go</Navbar.Brand>
        {/* <Link  to="/">Home</Link>
        <Link  to="/about-us">About Us</Link> */}
        {this.props.auth0.isAuthenticated ? <Logout/> : <Login/>}
      </Navbar>
    )
  }
}

export default withAuth0(Header);
