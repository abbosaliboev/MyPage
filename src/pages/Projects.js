import { useState } from 'react';
import { Container, Card, Nav } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import { tr, teamProjects, personalProjects } from '../i18n/data';

import EZIPImg from '../assets/EZIP.png';
import SafetyImg from '../assets/SafetyAI.png';
import VoidaImg from '../assets/VoidaAI.png';
import AICOMSImg from '../assets/AICOMS.png';
import FallImg from '../assets/FallDetection.png';
import CrosswalkImg from '../assets/ai_smart_crosswalk.png';
import PrettyImg from '../assets/PrettyEyes.png';
import PlantopiaImg from '../assets/Plantopia.png';
import TartibAIImg from '../assets/tartibai.png';
import SafarTourImg from '../assets/safartour.png';
import TillatandirImg from '../assets/tillatandir.png';
import LibraryImg from '../assets/library.png';

// Image map by project id for team projects
const teamImages = { 1: PrettyImg, 2: PlantopiaImg, 3: SafetyImg, 4: VoidaImg, 5: AICOMSImg, 6: FallImg, 7: CrosswalkImg, 8: EZIPImg };
// Image map by project id for personal projects
const personalImages = { 1: TartibAIImg, 2: SafarTourImg, 3: TillatandirImg, 4: LibraryImg };

const ProjectCard = ({ project, showRole, lang, labels }) => (
  <Card
    className="d-flex flex-column flex-md-row align-items-center p-3 shadow-sm"
    style={{ transition: 'box-shadow 0.3s ease' }}
    onMouseEnter={(e) => e.currentTarget.classList.replace('shadow-sm', 'shadow')}
    onMouseLeave={(e) => e.currentTarget.classList.replace('shadow', 'shadow-sm')}
  >
    {project.image && (
      <Card.Img
        src={project.image}
        alt={tr(project.title, lang)}
        className="img-fluid rounded"
        style={{ width: '100%', maxWidth: '150px', height: 'auto', objectFit: 'cover' }}
      />
    )}
    <Card.Body className={`flex-grow-1 mt-3 mt-md-0 ${project.image ? 'ms-md-3' : ''}`}>
      <Card.Title className="h5">
        {tr(project.title, lang)}
        {project.private && (
          <span className="ms-2 text-muted" style={{ fontSize: '0.75rem', fontWeight: 400 }}>· {labels.private}</span>
        )}
      </Card.Title>
      <Card.Text>{tr(project.description, lang)}</Card.Text>
      <div>
        <p className="mb-1 text-muted">
          <strong>{labels.status}:</strong>{' '}
          <span className={'fw-bold ' + (project.status === 'Completed' ? 'text-success' : 'text-warning')}>
            {project.status === 'Completed' ? labels.completed : labels.inProgress}
          </span>
        </p>
        {showRole && project.role && (
          <p className="mb-1 text-muted"><strong>{labels.role}:</strong> {project.role}</p>
        )}
        <p className="mb-1 text-muted"><strong>{labels.date}:</strong> {project.date}</p>
        {project.link && (
          <p className="mb-0">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary text-decoration-none">
              {labels.viewProject}
            </a>
          </p>
        )}
      </div>
    </Card.Body>
  </Card>
);

const Projects = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('team');

  const teamWithImages = teamProjects.map((p) => ({ ...p, image: teamImages[p.id] }));
  const personalWithImages = personalProjects.map((p) => ({ ...p, image: personalImages[p.id] || null }));

  const tabStyle = (key) => ({
    color: activeTab === key ? '#111' : 'rgba(0,0,0,0.38)',
    fontWeight: activeTab === key ? '600' : '400',
    borderColor: activeTab === key ? '#dee2e6 #dee2e6 #fff' : 'transparent',
    background: activeTab === key ? '#fff' : 'none',
  });

  return (
    <Container className="my-5" id="projects">
      <h2 className="text-center mb-2">{t.projects.title}</h2>
      <p className="text-center mb-4">{t.projects.subtitle}</p>

      <Nav
        variant="tabs"
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-4 justify-content-center"
      >
        <Nav.Item>
          <Nav.Link eventKey="team" style={tabStyle('team')}>{t.projects.team}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="personal" style={tabStyle('personal')}>{t.projects.personal}</Nav.Link>
        </Nav.Item>
      </Nav>

      <div className="d-flex flex-column gap-3">
        {activeTab === 'team'
          ? teamWithImages.slice().reverse().map((project) => (
              <ProjectCard key={project.id} project={project} showRole={true} lang={language} labels={t.labels} />
            ))
          : personalWithImages.map((project) => (
              <ProjectCard key={project.id} project={project} showRole={false} lang={language} labels={t.labels} />
            ))}
      </div>
    </Container>
  );
};

export default Projects;
