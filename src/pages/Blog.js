import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Img1 from '../assets/logo192.png';
import Img2 from '../assets/logo192.png';
import Img3 from '../assets/logo192.png';
import Img4 from '../assets/logo192.png';

const Gallery = () => {
  return (
    <Container className="my-5" id="gallery">
      <h2 className="mb-4 text-center">Gallery</h2>
      <Row className="g-3">
        <Col xs={12} md={6} className="text-center">
          <Image
            src={Img1}
            rounded
            className="d-block mx-auto"
            style={{ maxWidth: '300px', height: 'auto' }}
          />
        </Col>
        <Col xs={12} md={6} className="text-center">
          <Image
            src={Img2}
            rounded
            className="d-block mx-auto"
            style={{ maxWidth: '300px', height: 'auto' }}
          />
        </Col>
        <Col xs={12} md={6} className="text-center">
          <Image
            src={Img3}
            rounded
            className="d-block mx-auto"
            style={{ maxWidth: '300px', height: 'auto' }}
          />
        </Col>
        <Col xs={12} md={6} className="text-center">
          <Image
            src={Img4}
            rounded
            className="d-block mx-auto"
            style={{ maxWidth: '300px', height: 'auto' }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;