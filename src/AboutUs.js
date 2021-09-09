import React from 'react';
import Taylor from './img/taylor.jpg';
import Don from './img/don.jpg';
import David from './img/David.jpg'
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
                <h1 className='names'>Don Bandy</h1>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <img className='bio-pic' src={Don} width='500' height='500' alt="Don Bandy" />
                <p>This is a short bio about me. </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <h1 className='names'>David Waiganjo</h1>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <img src={David} alt="David Waiganjo" />
                <p className="bio-david">I am a Geospatial Scientist learning software Development. <br />
                  Am originally from Kenya and before joining Code fellows I was in the Airforce
                </p>
                <p className="bio-david"> I am passionate about the creation of apps that aid in environmental conservation and mitigation </p>
                <p className="bio-david">I love sports, whether it's playing watching or even playing related video games</p>
                <p className="bio-david"><a href="https://github.com/TaylorWhite21">https://github.com/Daviey52</a></p>
                <p className="bio-david"><a href="https://www.linkedin.com/in/taylorwhite21">https://www.linkedin.com/in/david-waiganjo-8185aa80/</a></p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                <h1 className='names'>Taylor White</h1>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body id='taylor'>
                <img src={Taylor} width='500' height='500' alt="placeholder" />
                <p className="bio-taylor">I am a network engineer turning software engineer. <br />
                  I was in the Army for 8 years and then
                  started working in networking in the civilian sector.</p>
                <p className="bio-taylor">My goal at the moment is to open a charity to teach children how to code and create video
                  games. </p>
                <p className="bio-taylor">In my free time, I watch anime, play games, workout</p>
                <p className="bio-taylor"><a href="https://github.com/TaylorWhite21">https://github.com/TaylorWhite21</a></p>
                <p className="bio-taylor"><a href="https://www.linkedin.com/in/taylorwhite21">https://www.linkedin.com/in/taylorwhite21</a></p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>
    )
  }
}
export default AboutUs;
