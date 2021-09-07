import React from 'react';
import './Landing.css';
import Banner from './img/banner.jpg'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';


class Landing extends React.Component {
  render() {
    return (
      <>
        <h1 id='title'>Know Before you Go!</h1>
        <Container id='banner-container'>
          <Image id='banner' src={Banner} alt="banner of friends hugging" fluid />
        </Container>
          <h3 id='bio'>Know Before you Go is committed to providing a safer dating experience. We provide the tools to find that special someone and plan a date that you both love and enjoy. </h3>
      </>
    )
  }
}
export default Landing;
