  
import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends React.Component {
  render() {

    return (
      <>
        {this.props.auth0.user.name}
        <h2>{this.props.auth0.user.email}</h2>
        <img src={this.props.auth0.user.picture} alt="Profile pic" />
      </>
    )
  }
}

export default withAuth0(Profile);
