// components/Footer.js

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://github.com/egebremichael" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://linkedin.com/in/efratagebremichael" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="mailto:efgebremichael@gmail.com">
          <FaEnvelope className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
