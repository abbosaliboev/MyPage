import React from 'react';
import { Container, Card } from 'react-bootstrap';
import SafetyImg from '../assets/SafetyAI.png';
import VoidaImg from '../assets/VoidaAI.png';
import AICOMSImg from '../assets/AICOMS.png';
import FallImg from '../assets/FallDetection.png';

const projectsData = [
  {
    id: 1,
    title: 'Smart Manufacturing AI Safety Monitoring System',
    description: 'A web-based application designed to detect and monitor PPE (Personal Protective Equipment) compliance in real-time.',
    image: SafetyImg,
    status: 'Completed',
    role: 'Team Leader, Frontend Developer, AI Engineer',
    date: '2025-05-01 ~ 2025-06-16',
    link: 'https://github.com/abbosaliboev/AI_Web_Software_Project.git',
  },
  {
    id: 2,
    title: 'AI Mobile App - Online Store (+For Visual Impairment)',
    description: 'This project develops an Android shopping app for visually impaired users, featuring a simple, screen reader–friendly interface and an AI model that summarizes product information.',
    image: VoidaImg,
    status: 'Completed',
    role: 'UI/UX Designer, Frontend Developer',
    date: '2025-04-01 ~ 2025-06-19',
    link: 'https://github.com/Hoogdle/Team_Voida.git',
  },
  {
    id: 3,
    title: 'AI COMS: Real-Time Safety Monitoring System',
    description: 'A private project integrating AI and computer vision for real-time safety monitoring, including PPE violation detection, alert systems, danger zone, and visual analytics in industrial environments.',
    image: AICOMSImg, 
    status: 'In Progress',
    role: 'Frontend Developer (React), AI Integration Assistant, Intern',
    date: '2025-03 ~ Present',
    link: null, 
  },
  {
    id: 4,
    title: 'Fall Detection AI Research',
    description: 'An ongoing research project focused on detecting human falls using computer vision and machine learning techniques for improved safety in smart environments.',
    image: FallImg, 
    status: 'In Progress',
    role: 'Researcher, AI Developer',
    date: '2025-07-01 ~ Present',
    link: 'https://github.com/yourusername/fall-detection-research', 
  },
];

const Projects = () => {
  return (
    <Container className="my-5" id="projects">
      <h2 className="text-center mb-4">My Projects</h2>
      <p className="text-center mb-4">
        Explore some of the projects I've worked on, showcasing my skills and contributions.
      </p>
      <div className="d-flex flex-column gap-3">
        {projectsData.slice().reverse().map((project) => (
          <Card
            key={project.id}
            className="d-flex flex-row align-items-center p-3 shadow-sm transition-hover"
            style={{ transition: 'box-shadow 0.3s ease' }}
            onMouseEnter={(e) => e.currentTarget.classList.replace('shadow-sm', 'shadow')}
            onMouseLeave={(e) => e.currentTarget.classList.replace('shadow', 'shadow-sm')}
          >
            <Card.Img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="img-fluid rounded"
              style={{ width: '150px', height: '100px', objectFit: 'cover' }}
            />
            <Card.Body className="flex-grow-1 ms-3">
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
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Projects;