import React from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


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
      activity: ''


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
  // handleMusic = (e) => {
  //   e.preventDefault()
  //   this.setState({ music: e.target.value })
  //   console.log(this.state.music)
  // }
  // handleSports = (e) => {
  //   e.preventDefault()
  //   this.setState({ sports: e.target.value })
  //   console.log(this.state.sports)
  //}
  handleActivity = (e) => {
    e.preventDefault()
    this.setState({ activity: e.target.value })
    console.log(this.state.activity)
  }



  handlesubmit = (e) => {
    e.preventDefault();
    // let city = e.target.city.value
    // let startDate = e.target.startdate.value
    // let endDate = e.target.enddate.value
    // let state = e.target.state.value
    // console.log(city, startDate, endDate, state)
    // this.setState({ city, startDate, endDate, state })

    this.getEvent();
  }
  getEvent = async () => {
    let events = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/events?searchQuery=${this.state.city}&startDate=${this.state.startDate}&stateCode=${this.state.state}&classificationName=${this.state.activity}`);
    this.setState({
      events: events.data
    })
    console.log(events);
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



          </Form>
        </Container>
      </>
    )
  }
}

export default EventForm;
