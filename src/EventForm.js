import React from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Events from './Events';


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
      event: {}

    }
  }
  handleCity = (e) => {
    e.preventDefault()
    this.setState({ city: e.target.value })
  }
  handleStartDate = (e) => {
    e.preventDefault()
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


    this.getEvent();
  }
  getEvent = async () => {
    let events = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/events?searchQuery=${this.state.city}&startDate=${this.state.startDate}&stateCode=${this.state.state}&classificationName=${this.state.activity}`);
    this.setState({
      events: events.data
    })
    console.log(this.state.events);
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
        <Container>

          <Form onSubmit={this.handlesubmit}>
            <Form.Label>
              <h3>Search Events</h3>
            </Form.Label>

            <Form.Group controlId="city" onChange={this.handleCity}>
              <Form.Label>City</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="startdate" onChange={this.handleStartDate}>
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="state" onChange={this.handleState}>
              <Form.Label>state</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group id="formGridCheckbox" onChange={this.handleActivity}>
              <Form.Check type="checkbox" label="Music" value="music" />
              <Form.Check type="checkbox" label="Sports" value="sports" />
              <Form.Check type="checkbox" label="Art/Theater" value="arts-theater" />

            </Form.Group>

            <Button type="submit">
              Search Events
            </Button>
            <Events events={this.state.events} handleCreateEvent={this.handleCreateEvent} />
          </Form>
        </Container>

      </>
    )
  }
}

export default EventForm;
