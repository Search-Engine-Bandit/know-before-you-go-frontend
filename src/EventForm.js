import React from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './EventForm.css';
import Col from 'react-bootstrap/Col'
import Events from './Events';
import CovidInfo from './CovidInfo.js';




class EventForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      events: [],
      city: '',
      startDate: '',
      state: '',
      music: '',
      sports: '',
      theater: '',
      activity: '',

      event: {},
      covidData: {}
    }
  }

  getCovidInfo = async () => {
    // let covid = await axios.get(`http://localhost:3001/covid?state=${this.state.state}`);
    let config = {
      params: { state: this.state.state }
    };

    let covid = await axios.get(`http://localhost:3001/covid`, config);
    this.setState({
      covidData: covid.data
    })
    console.log(this.state.covidData);
  }

  handleCity = (e) => {
    e.preventDefault()
    this.setState({ city: e.target.value })
  }
  handleStartDate = (e) => {
    e.preventDefault()
    //startDate = e.target.value;
    //const requiredDateFormat = /^.[a-zA-Z0-9]{1,8}$/;
    //if (requiredNameLength.test(userName))

    this.setState({ startDate: e.target.value })

  }

  handleState = (e) => {
    e.preventDefault()
    this.setState({ state: e.target.value })
  }

  handleActivity = (e) => {
    e.preventDefault()
    this.setState({ activity: e.target.value })
    console.log(this.state.activity)
  }

  handlesubmit = (e) => {
    e.preventDefault();

    this.getCovidInfo();
    this.getEvent();
  }

  getEvent = async () => {
    let events = await axios.get(`http://localhost:3001/events?searchQuery=${this.state.city}&startDate=${this.state.startDate}&stateCode=${this.state.state}&classificationName=${this.state.activity}`);
    this.setState({
      events: events.data
    })
    console.log(this.state.events);
    this.props.handleEvents(events.data);
  }


  handleCreateEvent = async (eventInfo) => {
    try {
      let result = await axios.post('http://localhost:3001/dbevents', eventInfo);
      const newEvent = result.data;
      this.setState({
        event: [...this.state.event, newEvent],
      })
    } catch (err) {
      console.log(err)
    }
  }



  render() {
    return (
      <>
        <Container id='form'>

          <Form onSubmit={this.handlesubmit}>
            <Form.Label>
              <h3>Search Events</h3>
            </Form.Label>

            <Form.Group controlId="city" onChange={this.handleCity}>
              <Form.Label>City</Form.Label>
              <Col xs={7}>
                <Form.Control class='form-input' type="text" />
              </Col>

            </Form.Group>

            <Form.Group controlId="startdate" onChange={this.handleStartDate}>
              <Form.Label>Start Date</Form.Label>

              <Col xs={7}>
                <Form.Control className='form-input' type="text" placeholder="yyyy-mm-dd" />
              </Col>

            </Form.Group>

            <Form.Group controlId="state" onChange={this.handleState}>
              <Form.Label>state</Form.Label>
              <Col xs={7}>
                <Form.Control className='form-input' type="text" />
              </Col>
            </Form.Group>

            <Form.Group id="formGridCheckbox" onChange={this.handleActivity}>
              <Form.Check type="checkbox" label="Music" value="music" />
              <Form.Check type="checkbox" label="Sports" value="sports" />
              <Form.Check type="checkbox" label="Art/Theater" value="arts" />

            </Form.Group>

            <Button type="submit">
              Search Events
            </Button>

            <CovidInfo covidData={this.state.covidData} />

          

          </Form>
        </Container>



      </>
    )
  }
}

export default EventForm;
