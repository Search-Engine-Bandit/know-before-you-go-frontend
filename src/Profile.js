import axios from 'axios';
import React from 'react';



class Profile extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      event: {}

    }
  }


  componentDidMount = async () => {
    const savedItems = await axios.get('http://localhost:3001/dbevents');
    this.setState({
      event: savedItems.data
    })
    console.log(this.state.event)
  }

  handleDeleteEvent = async (id) => {
    try {
      await axios.event(`http://localhost:3001/dbevents/${id}`);
      let remainingEvents = this.state.events.filter(event => event._id !== id)
      this.setState({
        events: remainingEvents
      })

    } catch (err) {
      console.log(err)
    }
  }


  render() {
    return (
      <>

      </>
    )
  }
}

export default Profile;
