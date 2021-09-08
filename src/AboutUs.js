import React from 'react';
import Taylor from './img/taylor.jpg';
import Don from './img/don.jpg';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './AboutUs.css';

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <h1 id='title'>Meet the team behind Know Before you Go!</h1>
        <Accordion id='allbios'>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <h1 class='names'>Don Bandy</h1>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <img class='bio-pic' src={Don} width='500' height='500' alt="Don Bandy" />
                <p>This is a short bio about me. </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <h1 class='names'>David Waiganjo</h1>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <img src="https://via.placeholder.com/500x500" alt="placeholder" />
                <p>This is a short bio about me. </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                <h1 class='names'>Taylor White</h1>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body id='taylor'>
                <img src={Taylor} width='500' height='500' alt="placeholder" />
                <p class="bio-taylor">I am a network engineer turning software engineer. <br />
                  I was in the Army for 8 years and then
                  started working in networking in the civilian sector.</p>
                <p class="bio-taylor">My goal at the moment is to open a charity to teach children how to code and create video
                  games. </p>
                  <p class="bio-taylor">In my free time, I watch anime, play games, workout</p>
                  <p class="bio-taylor"><a href="https://github.com/TaylorWhite21">https://github.com/TaylorWhite21</a></p>
                  <p class="bio-taylor"><a href="https://www.linkedin.com/in/taylorwhite21">https://www.linkedin.com/in/taylorwhite21</a></p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>
    )
  }
}
export default AboutUs;
