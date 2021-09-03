import axios from 'axios';
import React from 'react';


class Profile extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      savedItems: {}

    }
  }
  componentDidMount = async () => {

    const savedItems = await axios.get('http://localhost:3001/dbevents');
    this.setState({
      savedItems
    })
  }






  render() {
    return (
      <>
      </>
    )
  }
}

export default Profile;
