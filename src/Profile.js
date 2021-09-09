
import axios from 'axios';
import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { CardColumns, Card, Container, Button, Modal } from 'react-bootstrap';
import EventsUpdate from './EventsUpdate';
import './Profile.css';

const API_SERVER = process.env.REACT_APP_API;

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
    const savedItems = await axios.get(`${API_SERVER}/dbevents`);
    this.setState({
      events: savedItems.data
    })
  }

  handleDeleteEvent = async (id) => {
    try {
      await axios.delete(`${API_SERVER}/dbevents/${id}`);
      let remainingEvents = this.state.events.filter(event => event._id !== id)
      this.setState({
        events: remainingEvents
      })

    } catch (err) {
      console.log(err)
    }
  }
  handleUpdateEvent = async (event) => {
    try {

      const saved = await axios.put(`${API_SERVER}/dbevents/${event._id}`, event);
      const updateEvents = this.state.events.map((stateEvents) => {
        if (stateEvents._id === saved.data._id) {
          return saved.data;
        } else {
          return stateEvents
        }
      })
      this.setState({ events: updateEvents })
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
        <h1 className="saved">Saved Events</h1>

        <Container >
          <CardColumns className="cards">
            {this.state.events.length > 0 &&
              this.state.events.map((event) =>
                < Card key={event._id} style={{ height: '43rem' }}  >
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
                    <Card.Link href={event.ticket}>Buy Ticket </Card.Link>

                  </Card.Body>
                  <Button className="update" variant="info" onClick={() => this.handleShow(event)}> Update Event</Button>

                  <Button className="delete" variant="danger" onClick={() => this.handleDeleteEvent(event._id)}> Delete Event </Button>

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


