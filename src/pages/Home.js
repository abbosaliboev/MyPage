import { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import avatar from '../assets/avatar.png';
import cvEnglish from '../assets/CV_Abbos.pdf';
import { useLanguage } from '../context/LanguageContext';
import { tr, educationData, experienceData, globalProgramsText, activitiesData, certificatesText, honorsText } from '../i18n/data';

import certHackathon from '../assets/Certi-Hakhaton.png';
import certTopikCamp from '../assets/Certi-LevelUp.png';
import certKLP from '../assets/Certi-Language.png';
import certTopik from '../assets/Certi-Topik.png';
import cert3D from '../assets/Certi_3d.png';
import certAdvisor from '../assets/Certi_Advisor.png';
import certAIFluency from '../assets/Certi_AI_Fluence.png';
import certClaude from '../assets/Certi_Claude.png';
import certEKCAttendance from '../assets/Certi-EKC2026_Atten.png';
import certEKCPresentation from '../assets/Certi-EKC2026_Present.png';
import certSeoulGlobalCenter from '../assets/Certi_Seoul_global_center.png';
import certEKCVolunteer from '../assets/Certi-EKC2026-Volunteerpng.png';
import awardScholarship from '../assets/award-LevelUp.png';
import awardAIProject2 from '../assets/award-2024-2.png';
import awardAIProject from '../assets/award-2024-1.png';
import awardSPEDGold from '../assets/award-SPED.png';
import awardICCASSilver from '../assets/ICCAS_Silver_award.png';
import mobiCarePoster from '../assets/MobiCare_Poster_EKC2026.jpg';

// File refs in same order as certificatesText
const certFiles = [certSeoulGlobalCenter, certEKCVolunteer, certEKCPresentation, certEKCAttendance, certClaude, certAIFluency, cert3D, certAdvisor, certHackathon, certTopik, certTopikCamp, certKLP];
// File refs in same order as honorsText
const honorFiles = [awardICCASSilver, null, awardSPEDGold, awardScholarship, awardAIProject2, awardAIProject];
// File refs in same order as globalProgramsText (null where there's no poster/photo)
const globalProgramFiles = [mobiCarePoster, null];

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
      {file && (
        <img
          src={file}
          alt={text.title}
          style={{ maxWidth: '120px', width: '100%', height: 'auto', borderRadius: 8, cursor: 'pointer', display: 'block', margin: '0 auto' }}
          onClick={() => onOpen(file, text.title)}
        />
      )}
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

const GlobalProgramRow = ({ item, image, lang, labels, onOpen }) => (
  <div className="mb-4">
    <h5 className="mb-1"><strong>{tr(item.title, lang)}</strong></h5>
    <p className="mb-1"><em>{item.location}</em> · {item.date}</p>
    {item.role && (
      <p className="mb-1 text-muted" style={{ fontSize: '0.9rem' }}><strong>{labels.role}:</strong> {item.role}</p>
    )}
    {item.award && (
      <p className="mb-1"><strong>{labels.award}:</strong> <span className="fw-bold text-success">{item.award}</span></p>
    )}
    <p className="text-muted" style={{ fontSize: '0.9rem' }}>{tr(item.description, lang)}</p>
    <p className="mb-0 d-flex justify-content-between align-items-center flex-wrap">
      {item.link ? (
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary text-decoration-none">
          {labels.viewProject}
        </a>
      ) : <span />}
      {image && (
        <a href="#!" onClick={(e) => { e.preventDefault(); onOpen(image, tr(item.title, lang)); }} className="text-primary text-decoration-none">
          {labels.viewPoster}
        </a>
      )}
    </p>
  </div>
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
          <p className="mt-3 mb-0">ali@chungbuk.ac.kr</p>
          <p className="mb-0">abbosaliboyev66669999@gmail.com</p>
        </Col>

        <Col md={8}>
          <h1>I'm <strong>Abbos Aliboev</strong></h1>
          <p>{t.home.intro}</p>
          <div className="d-flex gap-2 flex-wrap">
            <a href={cvEnglish} download="Abbos_Aliboev_CV.pdf" target="_blank" rel="noreferrer" className="btn btn-outline-dark btn-sm">
              {t.home.downloadCV}
            </a>
          </div>
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

        {/* International Programs */}
        <Col md={12}>
          <h2 className="mt-5 mb-4">{t.home.globalPrograms}</h2>
          {globalProgramsText.map((item, i) => (
            <GlobalProgramRow key={`global-${i}`} item={item} image={globalProgramFiles[i]} lang={language} labels={t.labels} onOpen={open} />
          ))}
        </Col>

        {/* Activities */}
        <Col md={12}>
          <h2 className="mt-5 mb-4">{t.home.activities}</h2>
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
