
// import axios from 'axios';
import React from 'react';
import './App.css';
import EventForm from './EventForm';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      events: [],
    }
  };




  render() {
    return (
      <>
        <button onClick={this.getEvent}></button>
        <EventForm />
      </>
    );
  }
}

export default App;
