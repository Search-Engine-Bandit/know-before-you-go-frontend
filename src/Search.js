import React from 'react';
import EventForm from './EventForm';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Events from './Events.js'
import { Container, } from 'react-bootstrap';
import './Search.css'
import axios from 'axios';


class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      events: [],
      selectedEvent: {},


    }
  }
  handleCreateEvent = async (eventInfo) => {
    try {
      let result = await axios.post('http://localhost:3001/dbevents', eventInfo);
      const newEvent = result.data;
      this.setState({
        selectedEvent: newEvent,
      })
    } catch (err) {
      console.log(err)
    }
  }

  renderEvents = (newEvents) => {
    this.setState({
      events: newEvents
    })
  }

  render() {
    return (
      <Container>
        <EventForm handleEvents={this.renderEvents} />

        <Tabs defaultActiveKey="Events" >
          <Tab class='tabs' eventKey="Events" title="Events">
            <Events events={this.state.events} handleCreateEvent={this.handleCreateEvent} />
          </Tab>
          <Tab class='tabs' eventKey="Covid Data" title="Covid Data">
            <h1>hello from covid data</h1>
          </Tab>
          <Tab class='tabs' eventKey="contact" title="Contact">
            <h1>hello from page 3</h1>
          </Tab>
        </Tabs>
      </ Container>
    )
  }
}

export default Search;
