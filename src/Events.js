import React from 'react';
import { Container, CardColumns } from 'react-bootstrap';
import Event from './Event'


class Events extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedEvent: {},
      itemSaved: false

    }
  }
  // handleSelectedEvent = (selectedEvent) => {
  //   console.log(selectedEvent)
  //   this.setState({
  //     selectedEvent: selectedEvent,
  //     itemSaved: true
  //   })
  //   console.log(this.state)
  //   this.props.handleCreateEvent(selectedEvent)
  // }


  render() {
    console.log(this.props)

    return (
      <>
        <Container>
          <CardColumns>
            {this.props.events &&
              this.props.events.map((event, index) =>
                <Event key={index} event={event} handleCreateEvent={this.props.handleCreateEvent} />
              )}
          </CardColumns>
        </Container>


      </>
    )
  }
}
export default Events;
