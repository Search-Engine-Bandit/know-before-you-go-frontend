import React from "react";
import { Card, Button } from "react-bootstrap";


class Event extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      itemSaved: false,
      variant: 'primary'

    }
  }
  handleSelectedEvent = (selectedEvent) => {
    console.log(selectedEvent)
    this.setState({
      itemSaved: true,
      variant: 'success'
    })
    this.props.handleCreateEvent(selectedEvent)
  }

  render() {


    return (

      <Card style={{ width: '18rem' }} >
        <Card.Img src={this.props.event.image} />
        <Card.Body>
          <Card.Title>{this.props.event.name}</Card.Title>
          <Card.Text> Date: {this.props.event.localDate}</Card.Text>
          <Card.Text> Time: {this.props.event.localTime}</Card.Text>
          <Card.Text> City: {this.props.event.city}</Card.Text>
          <Card.Text> State: {this.props.event.state}</Card.Text>
          <Card.Link href={this.props.event.ticket}>Buy Ticket </Card.Link>


          {/* <Card.Text>{event.priceRange[0] }</Card.Text> */}
        </Card.Body>
        <Button variant={this.state.variant} onClick={() => {

          this.handleSelectedEvent(this.props.event)
        }}>
          {this.state.itemSaved ? 'Saved' : 'Save Event'}

        </Button>

      </Card >


    )
  }
}
export default Event;
