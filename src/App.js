import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      {/* Header */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Abbos Aliboev</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-auto">
        <Container>
          <div className="mb-2">
            <a href="https://github.com/abbosaliboev" target="_blank" rel="noreferrer" className="text-white mx-3">
              <FaGithub size={28} />
            </a>
            <a href="https://linkedin.com/in/abbos-aliboev" target="_blank" rel="noreferrer" className="text-white mx-3">
              <FaLinkedin size={28} />
            </a>
            <a href="https://instagram.com/abbos_aliboev" target="_blank" rel="noreferrer" className="text-white mx-3">
              <FaInstagram size={28} />
            </a>
          </div>
          <p className="mb-0">© 2025 Abbos Aliboev. All rights reserved.</p>
        </Container>
      </footer>
    </Router>
  );
}

export default App;
