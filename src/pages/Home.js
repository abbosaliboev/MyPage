import { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import avatar from '../assets/avatar.png';
import { useLanguage } from '../context/LanguageContext';
import { tr, educationData, experienceData, activitiesData, certificatesText, honorsText } from '../i18n/data';

import certHackathon from '../assets/Certi-Hakhaton.png';
import certTopikCamp from '../assets/Certi-LevelUp.png';
import certKLP from '../assets/Certi-Language.png';
import certTopik from '../assets/Certi-Topik.png';
import cert3D from '../assets/Certi_3d.png';
import certAdvisor from '../assets/Certi_Advisor.png';
import certAIFluency from '../assets/Certi_AI_Fluence.png';
import certClaude from '../assets/Certi_Claude.png';
import awardScholarship from '../assets/award-LevelUp.png';
import awardAIProject2 from '../assets/award-2024-2.png';
import awardAIProject from '../assets/award-2024-1.png';
import awardSPEDGold from '../assets/award-SPED.png';

// File refs in same order as certificatesText
const certFiles = [certClaude, certAIFluency, cert3D, certAdvisor, certHackathon, certTopik, certTopikCamp, certKLP];
// File refs in same order as honorsText
const honorFiles = [awardSPEDGold, awardScholarship, awardAIProject2, awardAIProject];

const DocModal = ({ show, onHide, src, alt = 'Document' }) => (
  <Modal show={show} onHide={onHide} centered size="lg">
    <Modal.Body className="text-center p-2">
      {src && (
        <img
          src={src}
          alt={alt}
          style={{ width: '80%', maxWidth: 900, height: 'auto', display: 'block', margin: '0 auto' }}
        />
      )}
    </Modal.Body>
  </Modal>
);

const DocRow = ({ text, file, lang, onOpen }) => (
  <Row className="align-items-center mb-4">
    <Col md={2} xs={4} className="text-center">
      <img
        src={file}
        alt={text.title}
        style={{ maxWidth: '120px', width: '100%', height: 'auto', borderRadius: 8, cursor: 'pointer', display: 'block', margin: '0 auto' }}
        onClick={() => onOpen(file, text.title)}
      />
    </Col>
    <Col md={10} xs={8}>
      <h5 className="mb-1"><strong>{text.title}</strong></h5>
      {(text.org || text.date) && (
        <p className="mb-1">
          {text.org && <em>{text.org}</em>}
          {text.org && text.date ? ' · ' : ''}
          {text.date}
        </p>
      )}
      {text.note && (
        <p className="text-muted" style={{ fontSize: '0.9rem' }}
          dangerouslySetInnerHTML={{ __html: tr(text.note, lang) }}
        />
      )}
    </Col>
  </Row>
);

const Home = () => {
  const { language, t } = useLanguage();
  const [show, setShow] = useState(false);
  const [active, setActive] = useState({ src: null, alt: '' });
  const open = (src, alt) => { setActive({ src, alt }); setShow(true); };
  const close = () => setShow(false);

  return (
    <Container className="my-5" id="home">
      <Row className="align-items-center">
        {/* Avatar + Intro */}
        <Col md={4} className="text-center mb-4 mb-md-0">
          <img
            src={avatar}
            alt="Abbos Aliboev"
            style={{ maxWidth: 200, width: '100%', height: 'auto' }}
          />
          <p className="mt-3">ali@chungbuk.ac.kr</p>
        </Col>

        <Col md={8}>
          <h1>I'm <strong>Abbos Aliboev</strong></h1>
          <p>{t.home.intro}</p>
        </Col>

        {/* Education & Experience */}
        <Col md={12}>
          <Row className="mt-5">
            <Col md={6}>
              <h2 className="mb-4">{t.home.education}</h2>
              <ul className="list-unstyled">
                {educationData.map((ed, i) => (
                  <li key={`edu-${i}`} className="mb-3">
                    <h5 className="mb-1"><strong>{ed.title}</strong></h5>
                    <p className="mb-1"><em>{ed.date}</em></p>
                    <p className="text-muted" style={{ fontSize: '0.9rem' }}
                      dangerouslySetInnerHTML={{ __html: tr(ed.note, language) }}
                    />
                  </li>
                ))}
              </ul>
            </Col>

            <Col md={6}>
              <h2 className="mb-4">{t.home.experience}</h2>
              <ul className="list-unstyled">
                {experienceData.map((e, i) => (
                  <li key={`exp-${i}`} className="mb-3">
                    <h5 className="mb-1"><strong>{e.title}</strong></h5>
                    <p className="mb-1">{e.org}</p>
                    <p className="mb-1"><em>{e.date}</em></p>
                    <p className="text-muted" style={{ fontSize: '0.9rem' }}
                      dangerouslySetInnerHTML={{ __html: tr(e.note, language) }}
                    />
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Col>

        {/* Activities */}
        <Col md={12}>
          <h2 className="mt-5">{t.home.activities}</h2>
          <ul className="list-unstyled">
            {activitiesData.map((a, i) => (
              <li key={`act-${i}`} className="mb-3">
                <h5 className="mb-1"><strong>{a.title}</strong></h5>
                <p className="mb-0"><em>{tr(a.role, language)}</em></p>
                {a.org && <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>{a.org}</p>}
                <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>{a.date}</p>
              </li>
            ))}
          </ul>
        </Col>

        {/* Honors & Awards */}
        <Col md={12}>
          <h2 className="mt-5">{t.home.honors}</h2>
          {honorsText.map((item, i) => (
            <DocRow key={`honor-${i}`} text={item} file={honorFiles[i]} lang={language} onOpen={open} />
          ))}
        </Col>
      </Row>

      {/* Certificates */}
      <Col md={12}>
        <h2 className="mt-5">{t.home.certificates}</h2>
        {certificatesText.map((item, i) => (
          <DocRow key={`cert-${i}`} text={item} file={certFiles[i]} lang={language} onOpen={open} />
        ))}
      </Col>

      <DocModal show={show} onHide={close} src={active.src} alt={active.alt} />
    </Container>
  );
};

export default Home;
