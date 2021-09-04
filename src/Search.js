import React from 'react';
import EventForm from './EventForm';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Events from './Events.js'
import { Container, Card, Button, CardColumns } from 'react-bootstrap';
import './Search.css'


class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      events: [],
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
            <Events events={this.state.events}/>
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
