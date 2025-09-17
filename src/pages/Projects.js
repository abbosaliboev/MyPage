import React from 'react';
import { Container, Card } from 'react-bootstrap';
import EZIPImg from '../assets/EZIP.png';
import SafetyImg from '../assets/SafetyAI.png';
import VoidaImg from '../assets/VoidaAI.png';
import AICOMSImg from '../assets/AICOMS.png';
import FallImg from '../assets/FallDetection.png';
import CrosswalkImg from '../assets/ai_smart_crosswalk.png';
import PrettyImg from '../assets/PrettyEyes.png';
import PlantopiaImg from '../assets/Plantopia.png';

const projectsData = [
  {
    id: 1,
    title: 'Pretty Eyes - AI Shopping Assistant for Visual Impairment',
    description: 'A shopping assistant application designed to help people with visual impairments.',
    image: PrettyImg,
    status: 'Completed',
    role: 'UI/UX Designer, Frontend Developer',
    date: '2024-05-10 ~ 2024-06-22',
    link: 'https://github.com/abbosaliboev/PrettyEyes.git',
  },
  {
    id: 2,
    title: 'Plantopia Website',
    description: 'Plantopia is a website designed to give users easy access to plant based information and products.',
    image: PlantopiaImg,
    status: 'Completed',
    role: 'UI/UX Designer, Frontend Developer',
    date: '2024-10-25 ~ 2024-12-15',
    link: 'https://github.com/abbosaliboev/Plantopia.git',
  },
  {
    id: 3,
    title: 'Smart Manufacturing AI Safety Monitoring System',
    description: 'A web-based application designed to detect and monitor PPE (Personal Protective Equipment) compliance in real-time.',
    image: SafetyImg,
    status: 'Completed',
    role: 'Team Leader, UI/UX Designer, Frontend Developer, AI Engineer',
    date: '2025-05-01 ~ 2025-06-16',
    link: 'https://github.com/abbosaliboev/AI_Web_Software_Project.git',
  },
  {
    id: 4,
    title: 'AI Mobile App - Online Store (+For Visual Impairment)',
    description: 'This project develops an Android shopping app for visually impaired users, featuring a simple, screen reader–friendly interface and an AI model that summarizes product information.',
    image: VoidaImg,
    status: 'Completed',
    role: 'UI/UX Designer, Frontend Developer',
    date: '2025-04-01 ~ 2025-06-19',
    link: 'https://github.com/Hoogdle/Team_Voida.git',
  },
  {
    id: 5,
    title: 'AI COMS: Real-Time Safety Monitoring System',
    description: 'A private project integrating AI and computer vision for real-time safety monitoring, including PPE violation detection, alert systems, danger zone, and visual analytics in industrial environments.',
    image: AICOMSImg, 
    status: 'In Progress',
    role: 'UI/UX Designer, Frontend Developer, AI Integration Assistant, Intern',
    date: '2025-03 ~ Present',
    link: null, 
  },
  {
    id: 6,
    title: 'Fall Detection AI Research',
    description: 'A research project focused on detecting human falls using computer vision and machine learning techniques for improved safety in smart environments.',
    image: FallImg, 
    status: 'In Progress',
    role: 'Researcher, AI Developer',
    date: '2025-07-01 ~ Present',
    link: 'https://github.com/abbosaliboev/fall-detection-research.git', 
  },
  {
    id: 7,
    title: 'AI Smart Crosswalk System',
    description: 'AI-powered Smart Crosswalk for safer pedestrian crossings.',
    image: CrosswalkImg, 
    status: 'Completed',
    role: 'Team Leader, AI Developer',
    date: '2025-07-23 ~ 2025-08-23',
    link: 'https://github.com/abbosaliboev/AI_Smart_Crosswalk.git', 
  },
  {
    id: 8,
    title: 'E-ZIP: Foreigner-Friendly Housing Platform',
    description: 'A Web-based housing platform designed for internationals in Korea, providing easy search, posting, and landlord-tenant interaction features.',
    image: EZIPImg, 
    status: 'Completed',
    role: 'UI/UX Designer, Frontend Developer, Ideation & Planning',
    date: '2025-09.13 ~ 2025-09.14',
    link: 'https://github.com/abbosaliboev/E-ZIP.git',
  },
];

const Projects = () => {
  return (
    <Container className="my-5" id="projects">
      <h2 className="text-center mb-4">My Team Projects</h2>
      <p className="text-center mb-4">
        Explore some of the projects I've worked on, showcasing my skills and contributions.
      </p>
      <div className="d-flex flex-column gap-3">
        {projectsData.slice().reverse().map((project) => (
          <Card
            key={project.id}
            className="d-flex flex-column flex-md-row align-items-center p-3 shadow-sm transition-hover"
            style={{ transition: 'box-shadow 0.3s ease' }}
            onMouseEnter={(e) => e.currentTarget.classList.replace('shadow-sm', 'shadow')}
            onMouseLeave={(e) => e.currentTarget.classList.replace('shadow', 'shadow-sm')}
          >
            <Card.Img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="img-fluid rounded"
              style={{
                width: '100%',        // mobil uchun to'liq kenglik
                maxWidth: '150px',    // desktop uchun cheklov
                height: 'auto',
                objectFit: 'cover'
              }}
            />
            <Card.Body className="flex-grow-1 ms-md-3 mt-3 mt-md-0">
              <Card.Title className="h5">{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <div>
                <p className="mb-1 text-muted">
                  <strong>Status:</strong>{' '}
                  <span
                    className={
                      'fw-bold ' +
                      (project.status === 'Completed'
                        ? 'text-success'
                        : project.status === 'In Progress'
                        ? 'text-warning'
                        : 'text-primary')
                    }
                  >
                    {project.status}
                  </span>
                </p>
                <p className="mb-1 text-muted">
                  <strong>Role:</strong> {project.role}
                </p>
                <p className="mb-1 text-muted">
                  <strong>Date:</strong> {project.date}
                </p>
                {project.link && (
                  <p className="mb-0">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-decoration-none"
                    >
                      View Project
                    </a>
                  </p>
                )}
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Projects;