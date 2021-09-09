import React from 'react';
import './App.css';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import BrowserRouter from './BrowserRouter.js';
import ParticlesBg from 'particles-bg'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      events: [],
    }
  };

  render() {
    return (
      <div id='bg-color'>
        <Router>
          <BrowserRouter/>
        </Router>
        <ParticlesBg type="circle" bg={true} />
      </div>
    );
  }
}

export default withAuth0(App);
