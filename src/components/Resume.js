import React from 'react';
import './Resume.css';
import { motion } from 'framer-motion';
import resume from './images/resume-2-modified.png';

const Resume = () => (
  <motion.section
    id="resume"
    className="resume-section"
    initial={{ scale: 1.5 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <motion.div
      className="resume-background"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
    <motion.div
      className="pdf-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <img
        src={resume}
        alt="Resume"
        className="resume-image"
      />
    </motion.div>
  </motion.section>
);

export default Resume;
