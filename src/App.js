import { useState, useRef, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

const LANGS = ['en', 'ko', 'ru', 'uz'];

function LangSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const dimStyle = {
    background: 'none', border: 'none', cursor: 'pointer',
    fontSize: '0.7rem', letterSpacing: '0.06em',
    padding: '2px 6px',
  };

  return (
    <div ref={ref} style={{ position: 'relative', marginLeft: '8px' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ ...dimStyle, color: 'rgba(255,255,255,0.38)' }}
      >
        {language.toUpperCase()} ▾
      </button>
      {open && (
        <div style={{
          position: 'absolute', right: 0, top: 'calc(100% + 4px)',
          background: '#1e2124', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '4px', padding: '4px 0',
          minWidth: '56px', zIndex: 1050,
        }}>
          {LANGS.filter(l => l !== language).map(lang => (
            <button
              key={lang}
              onClick={() => { setLanguage(lang); setOpen(false); }}
              style={{
                ...dimStyle,
                display: 'block', width: '100%', textAlign: 'left',
                color: 'rgba(255,255,255,0.45)',
                padding: '5px 12px',
              }}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function AppInner() {
  const { t } = useLanguage();

  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Abbos Aliboev</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">{t.nav.home}</Nav.Link>
              <Nav.Link as={Link} to="/about">{t.nav.about}</Nav.Link>
              <Nav.Link as={Link} to="/projects">{t.nav.projects}</Nav.Link>
              <Nav.Link as={Link} to="/blog">{t.nav.blog}</Nav.Link>
            </Nav>
            <LangSwitcher />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <footer className="bg-dark text-white text-center py-4" style={{ marginBottom: 0, width: '100%' }}>
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
            <a href="https://leetcode.com/abbosaliboev" target="_blank" rel="noreferrer" className="text-white mx-3">
              <SiLeetcode size={28} />
            </a>
          </div>
          <p className="mb-0">{t.footer}</p>
          <p className="mb-0" style={{ fontSize: '0.7rem', opacity: 0.3, marginTop: '4px' }}>
            Last updated: April 6, 2026, 4:16 PM KST
          </p>
        </Container>
      </footer>
    </Router>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}

export default App;
