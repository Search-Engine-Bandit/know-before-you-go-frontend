import React from 'react';

import './CovidInfo.css';
import { Container, Card } from 'react-bootstrap';
import './EventForm'

class CovidInfo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render() {

    console.log("Covid Data Props", this.props.covidData);

    return (
      <>
        <Container className="CovidCard">
          <Card style={{ width: '30rem' }} >
            {/* {<Card.Img src="https://wisconsindot.gov/PublishingImages/covid19.png" />} */}
            <Card.Body>
              <Card.Title>Covid Statistics in {this.props.covidData.state}</Card.Title>
              <hr></hr>
              {/* <Card.Img src=".src/img/CovidTest.jpg" alt =""/> */}
              <Card.Text>
                <img src=".src/img/CovidTest.jpg" alt="" />
                Positive Cases: {this.props.covidData.postiveCases}</Card.Text>
              <Card.Text>
                Hospitilized Currently: {this.props.covidData.hospitalizedCurrently}</Card.Text>
              <Card.Text>
                Deaths: {this.props.covidData.deaths}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </>
    )
  };
};

export default CovidInfo;
