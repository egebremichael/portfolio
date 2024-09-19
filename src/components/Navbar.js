import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <Link to="/" className="navbar-initials">EG</Link>
      </div>
      <ul className="navbar-list">
        {location.pathname !== '/projects' && (
        <li><Link to="/projects">Projects</Link></li>
        )}
        {location.pathname !== '/research' && (
        <li><Link to="/research">Research</Link></li>
        )}
        {location.pathname !== '/resume' && (
        <li><Link to="/resume">Resume</Link></li>
        )}
        {location.pathname !== '/contact' && (
        <li><Link to="/contact">Contact</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
