import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ProjectImg1 from '../assets/my_photo.JPG'; // Rasm 2

const Blog = () => {
  return (
    <Container className="my-5" id="blog">
      <h2>Blog</h2>
      <Row className="mb-5 align-items-center">
        <Col md={4}>
          <Image src={ProjectImg1} fluid rounded />
        </Col>
        <Col md={8}>
          <p>
            One of my recent projects involved building a real-time AI-based safety monitoring web app.
            I served as both frontend lead and AI engineer. I used React, and YOLOv8 to create a
            system that detects PPE violations in manufacturing environments.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
