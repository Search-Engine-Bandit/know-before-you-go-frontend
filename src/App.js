
import axios from 'axios';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    }
  };


  getEvent = async () => {
    let events = await axios.get('http://localhost:3001/events');
    this.setState({
      events: events.data,
    })
    console.log(events);
  }

  render(){
    return (
      <button onClick={this.getEvent}></button>
    );
  }
}

export default App;
