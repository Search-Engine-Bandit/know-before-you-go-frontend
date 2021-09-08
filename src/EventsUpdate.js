import React from 'react';
import { Form, Button, Container } from 'react-bootstrap'


class EventsUpdate extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedEvent: this.props.selectedEvent,
      id: this.props.selectedEvent._id,
      prospect: '',
      mood: '',
      going: ''

    }
  }
  handleStatus = (e) => {
    e.preventDefault()
    // this.props.selectedEvent.going = e.target.value
    this.setState({ going: e.target.value })
    //   let selectedEvent = { ...this.state.selectedEvent }
    //   selectedEvent.going = e.target.value
    //   this.setState({
    //     selectedEvent
    //   })
  }

  handleMood = (e) => {
    e.preventDefault()
    this.setState({ mood: e.target.value })
  }
  handleProspect = (e) => {
    e.preventDefault()
    this.setState({ prospect: e.target.value })
  }
  handleUpdate = (e) => {
    e.preventDefault();
    this.props.handleUpdateEvent(this.state)
    this.props.handleClose();
  }
  render() {
    return (
      <>

        <Container>
          <Form onSubmit={this.handleUpdate}>
            <Form.Label> Update Event</Form.Label>

            <Form.Group controlId="Going">
              <Form.Label> Going to Event?</Form.Label>
              <Form.Control type="text" onChange={this.handleStatus} value={this.state.going} />
            </Form.Group>

            <Form.Group controlId="Going with">
              <Form.Label> Who is going with you</Form.Label>
              <Form.Control type="text" onChange={this.handleProspect} value={this.state.Prospect} />
            </Form.Group>

            <Form.Group controlId="status">
              <Form.Label>Event Mood</Form.Label>
              <Form.Control type="text" onChange={this.handleMood} value={this.state.mood} />
            </Form.Group>


            <Button type="submit" variant="success">Update Event</Button>
          </Form>
        </Container>


      </>
    )
  }
}

export default EventsUpdate;
