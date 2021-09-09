import React from 'react';
import EventForm from './EventForm';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Events from './Events.js'
import CovidInfo from './CovidInfo.js'
import Container from 'react-bootstrap/Container';
import './Search.css'
import axios from 'axios';


class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      events: [],
      selectedEvent: {},
      covid: {},

    }
  }
  handleCreateEvent = async (eventInfo) => {
    try {
      let result = await axios.post(`http://localhost:3001/dbevents`, eventInfo);
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

  renderCovid = (newCovidData) => {
    this.setState({
      covid: newCovidData
    })
  }

  render() {
    return (
      <Container id='eventform'>
        <EventForm handleEvents={this.renderEvents} />

        <Tabs defaultActiveKey="Events" >
          <Tab className='tabs' eventKey="Events" title="Events">
            <Events events={this.state.events} handleCreateEvent={this.handleCreateEvent} />
          </Tab>
          <Tab className='tabs' eventKey="Covid Data" title="Covid Data">
            <CovidInfo covidData={this.state.covid} handleCovid={this.renderCovid} />
          </Tab>
          <Tab className='tabs' eventKey="Resturants" title="Resturants">
          </Tab>
          <Tab className='tabs' eventKey="Night Clubs" title="Night Clubs">
          </Tab>
          <Tab className='tabs' eventKey="Movies" title="Movies">
          </Tab>

        </Tabs>
      </ Container>
    )
  }
}

export default Search;
