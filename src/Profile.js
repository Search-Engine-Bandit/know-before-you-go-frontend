
import axios from 'axios';
import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { CardColumns, Card, Container, Button, Modal } from 'react-bootstrap';
import EventsUpdate from './EventsUpdate';
import './Profile.css'



class Profile extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      events: [],
      showModal: false,
      selectedEvent: null

    }
  }

  componentDidMount = async () => {
    const savedItems = await axios.get('http://localhost:3001/dbevents');
    this.setState({
      events: savedItems.data
    })
    console.log(this.state.events, 'new')
  }

  handleDeleteEvent = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/dbevents/${id}`);
      let remainingEvents = this.state.events.filter(event => event._id !== id)
      this.setState({
        events: remainingEvents
      })

    } catch (err) {
      console.log(err)
    }
  }
  handleUpdateEvent = async (event) => {
    console.log("saved event id", event._id)
    try {

      const saved = await axios.put(`http://localhost:3001/dbevents/${event._id}`, event);
      console.log("new", saved.data)

      const updateEvents = this.state.events.map((stateEvents) => {
        console.log("state Event", stateEvents)
        console.log("saved data", saved.data)
        console.log("saved event", event)
        if (stateEvents._id === saved.data._id) {
          console.log(saved.data)
          return saved.data;
        } else {
          return stateEvents
        }
      })
      this.setState({ events: updateEvents })
      console.log("updated events", updateEvents)
    } catch (err) {
      console.log(err)
    }
  }


  handleShow = (event) => {
    this.setState({ showModal: true, selectedEvent: event })
  }

  handleClose = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <>
        <h1>Saved Events</h1>
        <Container>
          <CardColumns>
            {this.state.events.length > 0 &&
              this.state.events.map((event) =>
                <Card key={event._id} style={{ width: '18rem' }} >
                  <Card.Img src={event.image} />
                  <Card.Body>
                    <Card.Title>{event.name}</Card.Title>
                    <Card.Text>Date: {event.localDate}</Card.Text>
                    <Card.Text>Time: {event.localTime}</Card.Text>
                    <Card.Text>City: {event.city}</Card.Text>
                    <Card.Text>State: {event.state}</Card.Text>

                    {event.going ? <Card.Text>Going ? :{event.going}</Card.Text> : ''}
                    {event.prospect ? <Card.Text>Prospect? :{event.prospect}</Card.Text> : ''}
                    {event.mood ? <Card.Text> Mood: {event.mood}</Card.Text> : ''}
                    {/* <Card.Text>{event.priceRange[0] }</Card.Text> */}
                    <Card.Link href={event.ticket}>Buy Ticket </Card.Link>

                  </Card.Body>
                  <Button className="update" variant="info" onClick={() => this.handleShow(event)}> Update Event</Button>

                  <Button className="delete" variant="danger" onClick={() => this.handleDeleteEvent(event._id)}>Delete Event</Button>

                </Card>
              )}
          </CardColumns>

          <Modal show={this.state.showModal} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Body>
                <EventsUpdate selectedEvent={this.state.selectedEvent} handleClose={this.handleClose} handleUpdateEvent={this.handleUpdateEvent} />
              </Modal.Body>
            </Modal.Header>
          </Modal>

        </Container>
      </>
    )
  }
}

export default withAuth0(Profile);


