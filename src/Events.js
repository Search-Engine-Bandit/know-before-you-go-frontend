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
