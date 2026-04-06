import { Container, Row, Col, Image } from 'react-bootstrap';
import ProfileImg from '../assets/my_photo.JPG';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <Container className="my-5" id="about">
      <h2 className="mb-4">{t.about.title}</h2>
      <Row className="mb-5 align-items-center">
        <Col md={4}>
          <Image src={ProfileImg} alt="Abbos Aliboev" fluid rounded />
        </Col>
        <Col md={8}>
          <p dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
          <p dangerouslySetInnerHTML={{ __html: t.about.p2 }} />
          <p dangerouslySetInnerHTML={{ __html: t.about.p3 }} />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
