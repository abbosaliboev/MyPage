import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import avatar from '../assets/avatar.png';

// ===== PNG fayllaring (o'zingizdagi nomlarga moslang) =====
import certHackathon from '../assets/Certi-Hakhaton.png';
import certTopikCamp from '../assets/Certi-LevelUp.png';
import certKLP from '../assets/Certi-Language.png';
import certTopik from '../assets/Certi-Topik.png';
import awardScholarship from '../assets/award-LevelUp.png';
import awardAIProject2 from '../assets/award-2024-2.png';
import awardAIProject from '../assets/award-2024-1.png';
import awardSPEDGold from '../assets/award-SPED.png';

// ---------- Modal (kattalashtirilgan rasm ko'rsatish) ----------
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

// ---------- Bir xil qator UI (Certificates & Honors uchun) ----------
const DocRow = ({ item, onOpen }) => (
  <Row className="align-items-center mb-4">
    <Col md={2} xs={4} className="text-center">
      <img
        src={item.file}
        alt={item.title}
        style={{
          maxWidth: '120px',
          width: '100%',
          height: 'auto',
          borderRadius: 8,
          cursor: 'pointer',
          display: 'block',
          margin: '0 auto'
        }}
        onClick={() => onOpen(item.file, item.title)}
      />
    </Col>
    <Col md={10} xs={8}>
      <h5 className="mb-1"><strong>{item.title}</strong></h5>
      {(item.org || item.date) && (
        <p className="mb-1">
          {item.org && <em>{item.org}</em>}
          {item.org && item.date ? ' · ' : ''}
          {item.date}
        </p>
      )}
      {item.note && <p className="text-muted" style={{ fontSize: '0.9rem' }}>{item.note}</p>}
    </Col>
  </Row>
);

const Home = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState({ src: null, alt: '' });
  const open = (src, alt) => { setActive({ src, alt }); setShow(true); };
  const close = () => setShow(false);

  // ====== Data ======
  const education = [
    {
      title: 'Chungbuk National University (CBNU), South Korea',
      date: 'Mar 2023 – Present',
      note: (
        <>
          B.S. in Computer Science <br />
          Major in <strong>Artificial Intelligence</strong> (from Mar 2025) <br />
          <a href="https://www.cbnu.ac.kr/eng/" target="_blank" rel="noreferrer">
            cbnu.ac.kr
          </a>
        </>
      ),
    },
    {
      title: '42.uz, Online',
      date: 'Jun 2025 – Present',
      note: (
        <>
          Express Algorithm & Data Structure <br />
          Mentors include software engineers from Meta, Amazon, and Google. <br />
          <a href="https://42.uz" target="_blank" rel="noreferrer">
            42.uz
          </a>
        </>
      ),
    },
    {
      title: 'academy.pdp.uz, Online',
      date: 'Mar 2024 – Present',
      note: (
        <>
          Frontend Development <br />
          <a href="https://academy.pdp.uz" target="_blank" rel="noreferrer">
            academy.pdp.uz
          </a>
        </>
      ),
    },
  ];

  const experience = [
    {
      title: 'Undergraduate Intern – Data Analytics Lab (DaLab)',
      org: 'Chungbuk National University (Cheongju, South Korea)',
      date: 'Sep 2024 – Present',
      note: (
        <>
          Working on AI and Smart Manufacturing projects, focusing on web & computer vision (YOLO). <br />
          <a
            href="https://sites.google.com/view/data-analytics-lab/members?authuser=0"
            target="_blank"
            rel="noreferrer"
          >
            dalab.cbnu.ac.kr
          </a>
        </>
      ),
    },
    {
      title: 'Sales & Service Specialist',
      org: 'HUMANS.uz (Tashkent, Uzbekistan)',
      date: 'Nov 2020 – Apr 2021',
      note: 'Assisted customers with mobile and fintech services, handled payments, and resolved service issues.',
    },
  ];

  const certificates = [
    {
      title: 'Global Innovators IT LAB Hackathon Certificate',
      org: '충북PRO메이커센터 (Chungbuk PRO Maker Center)',
      date: 'Issued: September 14, 2025',
      note: 'Successfully completed the Global Innovators’ IT LAB Hackathon (2025.09.13 – 2025.09.14), demonstrating innovation and strong IT application skills.',
      file: certHackathon,
    },
    {
      title: 'TOPIK (Test of Proficiency in Korean) Level 5 Certificate',
      org: 'President of National Institute for International Education',
      date: 'Issued: November 10, 2024',
      note: 'Advanced Korean proficiency (C1 equivalent) – academic and professional communication skills.',
      file: certTopik,
    },
    {
      title: 'Certificate of Completion — CBNU 2024 Summer LEVEL-UP TOPIK Camp',
      org: 'Office of International Affairs, Chungbuk National University',
      date: 'Issued: July 12, 2024',
      note: 'Program: Jun 24, 2024 – Jul 12, 2024',
      file: certTopikCamp,
    },
    {
      title: 'Completion Certificate — Korean Language Program',
      org: 'CBNU International Office',
      date: 'Issued: July 19, 2024',
      note: 'Program: Mar 25, 2021 – Feb 15, 2023',
      file: certKLP,
    },
  ];

  const honors = [
    {
      title: 'Gold Award — AI Smart Crosswalk (Team Leader)',
      org: 'SPIED 2025, Innovative Research & Education of Asia (China)',
      date: 'Aug 23, 2025',
      note: 'Led the multinational team "One Asia" to win Gold Award at the 13th Summer Program for Innovative Engineering Design (SP!ED 2025).',
      file: awardSPEDGold,
    },
    {
      title: 'Scholarship — TOPIK Level-up Camp (Attendance & Academic Excellence)',
      org: 'CBNU Office of International Affairs',
      date: 'Aug 20, 2024',
      note: 'High attendance & outstanding performance',
      file: awardScholarship,
    },
    {
      title: 'Best Award — AI Open Source Project (English Presentation)',
      org: 'CBNU SW중심대학사업단',
      date: 'Dec 19, 2024',
      note: 'Recognized for excellent course-based project presentation',
      file: awardAIProject2,
    },
    {
      title: 'Excellence Award — AI Open Source Specialized Project',
      org: 'CBNU SW중심대학사업단',
      date: 'Jul 3, 2024',
      note: 'Awarded for outstanding performance in the course-based AI open source project (최우수상).',
      file: awardAIProject,
    },
  ];

  return (
    <Container className="my-5" id="home">
      <Row className="align-items-center">
        {/* Avatar + Intro */}
        <Col md={4} className="text-center mb-4 mb-md-0">
          <img
            src={avatar}
            alt="Abbos Aliboev professional photo"
            style={{ maxWidth: 200, width: '100%', height: 'auto' }}
          />
          <p className="mt-3">ali@chungbuk.ac.kr</p>
        </Col>

        <Col md={8}>
          <h1>I'm <strong>Abbos Aliboev</strong></h1>
          <p>
            I'm from Uzbekistan and currently studying Computer Science at Chungbuk National University in South Korea.<br />
            My main interests include AI, Deep Learning, Computer Vision, Smart Manufacturing and Web development.<br />
            This site serves as my portfolio to showcase my projects, blog posts, and works.
          </p>
        </Col>

        {/* Education & Experience (2 ustun, massivdan) */}
        <Col md={12}>
          <Row className="mt-5">
            {/* Education */}
            <Col md={6}>
              <h2 className="mb-4">Education</h2>
              <ul className="list-unstyled">
                {education.map((ed, i) => (
                  <li key={`edu-${i}`} className="mb-3">
                    <h5 className="mb-1"><strong>{ed.title}</strong></h5>
                    <p className="mb-1"><em>{ed.date}</em></p>
                    <p className="text-muted" style={{ fontSize: '0.9rem' }}>{ed.note}</p>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Experience */}
            <Col md={6}>
              <h2 className="mb-4">Experience</h2>
              <ul className="list-unstyled">
                {experience.map((e, i) => (
                  <li key={`exp-${i}`} className="mb-3">
                    <h5 className="mb-1"><strong>{e.title}</strong></h5>
                    <p className="mb-1">{e.org}</p>
                    <p className="mb-1"><em>{e.date}</em></p>
                    {e.note && (
                      <p className="text-muted" style={{ fontSize: '0.9rem' }}>{e.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Col>

        {/* Honors & Awards */}
        <Col md={12}>
          <h2 className="mt-5">Honors & Awards</h2>
          {honors.map((a, i) => (
            <DocRow key={`award-${i}`} item={a} onOpen={open} />
          ))}
        </Col>
      </Row>

        {/* Certificates */}
        <Col md={12}>
          <h2 className="mt-5">Certificates</h2>
          {certificates.map((c, i) => (
            <DocRow key={`cert-${i}`} item={c} onOpen={open} />
          ))}
        </Col>

      {/* Modal: enlarged image */}
      <DocModal show={show} onHide={close} src={active.src} alt={active.alt} />
    </Container>
  );
};

export default Home;