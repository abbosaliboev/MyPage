import React from 'react';
import { Container, Card } from 'react-bootstrap';

const projectsData = [
  {
    id: 1,
    title: 'Project One',
    description: 'A web application for managing tasks and improving productivity.',
    image: 'https://via.placeholder.com/300x200',
    status: 'Completed',
    role: 'Full-Stack Developer',
    date: '2024-12-01',
    link: 'https://github.com/abbosaliboev/Web_AI_Project.git',
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
        {projectsData.map((project) => (
          <Card
            key={project.id}
            className="shadow-lg d-flex flex-row align-items-center p-3"
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
                  <strong>Status:</strong> {project.status}
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