import React from 'react';
import axios from 'axios'
import { Container, Card } from 'react-bootstrap';

class CovidInfo extends React.Component {
  constructor (props) {
    super(props);
      this.state = {
        covidData: []
      }
  }

  getCovidInfo = async () => {
    let covid = await axios.get(`https://api.covidtracking.com/v1/states/ca/current.json`);
    this.setState({
      covidData: covid.data
    })
  }

  render() {

    return (
      <>
        <Container>
            {this.state.covidData.length > 0 &&
              this.state.covidData.map(info =>
                <Card key={info.id} style={{ width: '18rem' }} >
                  <Card.Img src="https://wisconsindot.gov/PublishingImages/covid19.png"/>
                  <Card.Body>
                    <Card.Title>Covid Statistics for your State</Card.Title>
                    <Card.Text>{info.positive}</Card.Text>
                    <Card.Text>{info.hospitalizedCurrently}</Card.Text>
                    <Card.Text>{info.death}</Card.Text>
                  </Card.Body>
                </Card>
              )}
        </Container>
      </>
    )
  };
};

export default CovidInfo;