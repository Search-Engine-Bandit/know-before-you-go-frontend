import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header';




import Login from './Login';
import Profile from './Profile.js';
import EventForm from './EventForm.js'



class BrowserRouter extends React.Component {

  render() {
    return (

      <>
        <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                {this.props.auth0.isAuthenticated ? <EventForm/> : ' I am here'}
              </Route>
              <Route exact path="/profile">
                {this.props.auth0.isAuthenticated ? <Profile /> : ' I am here'}
              </Route>
            </Switch>
        </Router>
      </>
    )
  }
}

export default withAuth0(BrowserRouter);
