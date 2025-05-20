import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import avatar from '../assets/avatar.png'; 

const Home = () => {
  return (
    <Container className="my-5" id="home">
      <Row className="align-items-center">
        <Col md={4} className="text-center mb-4 mb-md-0">
        <Image
            src="{avatar}"
            fluid
            alt="Abbos Aliboev"
            style={{ maxWidth: '200px' }}
        />
        </Col>
        <Col md={8}>
          <h1>I'm <strong>Abbos Aliboev</strong></h1>
          <p>
            I'm from Uzbekistan and currently studying Computer Science at Chungbuk National University in South Korea.<br/>
            My main interests include AI, Deep Learning, Smart Manufacturing and Web development.<br/>
            This site serves as my portfolio to showcase my projects, blog posts, and works.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
