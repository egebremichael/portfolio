import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import Footer from './components/Footer';
import './App.css';

const HeroSection = React.lazy(() => import('./components/HeroSection'));
const Projects = React.lazy(() => import('./components/Projects'));
const Research = React.lazy(() => import('./components/Research'));
const Resume = React.lazy(() => import('./components/Resume'));
const Contact = React.lazy(() => import('./components/Contact'));

const App = () => {
  const location = useLocation();

  // Define routes where the footer should NOT appear
  const hideFooterRoutes = ["/"];

  return (
    <div className="app">
      <ParticlesBackground />
      <Navbar />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </React.Suspense>
      {!hideFooterRoutes.includes(location.pathname) && <Footer />} {/* Conditional rendering */}
    </div>
  );
};

const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;
