import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header';




import Profile from './Profile.js';
import Landing from './Landing.js'
import Footer from './Footer.js'
import Search from './Search.js';
import AboutUs from './AboutUs.js'



class BrowserRouter extends React.Component {


  render() {
    return (
      <>
        <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Landing />
              </Route>
              <Route exact path="/profile">
                {this.props.auth0.isAuthenticated ? <Profile /> : ''}
              </Route>
              <Route exact path="/search">
              {this.props.auth0.isAuthenticated ? <Search /> : ''}
              </Route>
              <Route exact path="/about-us">
              <AboutUs />
              </Route>
            </Switch>
            <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(BrowserRouter);
