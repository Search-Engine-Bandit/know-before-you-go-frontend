import React from 'react';
import { Container, Card, Button, CardColumns } from 'react-bootstrap';


class Events extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedEvent: {},

    }
  }
  handleSelectedEvent = (selectedEvent) => {
    this.setState({
      selectedEvent
    })
    this.props.handleCreateEvent(selectedEvent)
  }


  render() {
    console.log(this.state.selectedEvent)
    return (
      <>
        <Container>
          <CardColumns>
            {this.props.events.length > 0 &&
              this.props.events.map((event) =>
                <Card key={event.id} style={{ width: '18rem' }} >
                  <Card.Img src={event.image} />
                  <Card.Body>
                    <Card.Title>{event.name}</Card.Title>
                    <Card.Text>{event.localDate}</Card.Text>
                    <Card.Text>{event.localTime}</Card.Text>
                    <Card.Text>{event.city}</Card.Text>
                    <Card.Text>{event.state}</Card.Text>
                    {/* <Card.Text>{event.priceRange[0] }</Card.Text> */}
                  </Card.Body>
                  <Button onClick={() => this.handleSelectedEvent(event)}>
                    Save Event
                  </Button>

                </Card>
              )}
          </CardColumns>
        </Container>


      </>
    )
  }
}
export default Events;
