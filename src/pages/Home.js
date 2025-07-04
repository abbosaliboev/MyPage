import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import avatar from '../assets/avatar.png'; 

const Home = () => {
  return (
    <Container className="my-5" id="home">
      <Row className="align-items-center">
        <Col md={4} className="text-center mb-4 mb-md-0">
        <Image
            src={avatar}
            fluid
            alt="Abbos Aliboev"
            style={{ maxWidth: '200px' }}
        />
          <p className="mt-3">
            ali@chungbuk.ac.kr
          </p>
        </Col>
        <Col md={8}>
          <h1>I'm <strong>Abbos Aliboev</strong></h1>
          <p>
            I'm from Uzbekistan and currently studying Computer Science at Chungbuk National University in South Korea.<br/>
            My main interests include AI, Deep Learning, Computer Vision, Smart Manufacturing and Web development.<br/>
            This site serves as my portfolio to showcase my projects, blog posts, and works.
          </p>
        </Col>

        <Col md={12}>
          <h2 className="mt-5">Education</h2>
          <ul>
            <li>
              <strong>Chungbuk National University (CBNU), South Korea</strong><br />
              B.S. in Computer Science (2023.03 – Present) <br />
              Major in <strong>Artificial Intelligence</strong> (from 2025.03)
              <br />
              <a href="https://www.cbnu.ac.kr/eng/" target="_blank" rel="noreferrer">
                cbnu.ac.kr
              </a>
            </li>
            <li className="mt-3">
              <strong>Data Analytics Lab (DaLab), CBNU</strong><br />
              Scholarship Intern – AI and Smart Manufacturing (2024.09 - Present)
              <br />
              <a href="https://sites.google.com/view/data-analytics-lab/members?authuser=0" target="_blank" rel="noreferrer">
                dalab.cbnu.ac.kr
              </a>
            </li>
            <li className="mt-3">
              <strong>42.uz, Online</strong><br />
              Express Algorithm & Data Structer (2025.06 - Present)<br />
              Mentors include <strong>software engineers from Meta, Amazon, and Google</strong>.<br />
              <a href="https://42.uz" target="_blank" rel="noreferrer">
                42.uz
              </a>
            </li>
            <li className="mt-3">
              <strong>academy.pdp.uz, Online</strong><br />
              Frontend Development (2024.03 - Present)<br />
              <a href="hhttps://academy.pdp.uz" target="_blank" rel="noreferrer">
                https://academy.pdp.uz
              </a>
            </li>

          </ul>
        </Col>

      </Row>
    </Container>
  );
};

export default Home;
