import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ProfileImg from '../assets/my_photo.JPG'; // Rasm 1
// import ProjectImg1 from '../assets/my_photo.JPG'; // Rasm 2

const About = () => {
  return (
    <Container className="my-5" id="about">
      <h2 className="mb-4">About Me</h2>

      {/* First Block */}
      <Row className="mb-5 align-items-center">
        <Col md={4}>
          <Image src={ProfileImg} alt="Abbos Aliboev professional photo" fluid rounded />
        </Col>
        <Col md={8}>
          <p>
              I’m <strong>Aliboev Abbos</strong>, a <strong>Computer Science student</strong> at 
              <strong> Chungbuk National University</strong>. I began my studies in <strong>2023</strong>, and in 
              <strong> 2024</strong>, I was selected as a <strong>scholarship intern</strong> at the 
              <strong> Data Analytics Lab (DaLab)</strong> within CBNU. Since <strong>2025</strong>, my major has been 
              officially <strong>Artificial Intelligence</strong>.
            </p>
            <p>
              My main interests include <strong>AI, Computer Vision, Object Detection, Deep Learning, Machine Learning, 
              Smart Manufacturing,</strong> and <strong>Web Development (Frontend)</strong>. I love building intelligent systems 
              that are both scalable and user-friendly.
            </p>
            <p>
              Currently, I am conducting research on <strong>Fall Detection</strong> using AI and computer vision techniques.
            </p>
        </Col>
      </Row>

      {/* Second Block */}
      {/* <Row className="mb-5 align-items-center">
        <Col md={4}>
          <Image src={ProjectImg1} fluid rounded />
        </Col>
        <Col md={8}>
          <p>
            One of my recent projects involved building a real-time AI-based safety monitoring web app.
            I served as both frontend lead and AI engineer. I used React, FastAPI, and YOLOv5 to create a
            system that detects PPE violations in manufacturing environments.
          </p>
        </Col>
      </Row> */}

      {/* More rows can be added in the same format */}
    </Container>
  );
};

export default About;