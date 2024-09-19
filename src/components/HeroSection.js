import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      await new Promise(resolve => setTimeout(resolve, 700)); 
      setShowName(true);
    };

    sequence();
  }, []);

  return (
    <section id="hero" className="hero-section">
      <motion.div
        className="hero-background"
        initial={{ scale: 1.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <div className="hero-spacer" />
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="hero-title"
          initial={{ x: -100, opacity: 0 }} 
          animate={{
            x: showName ? 100 : 0, 
            opacity: showName ? 0 : 1,
            transition: { duration: 1, ease: "easeOut" }
          }}
        >
          <h1>Welcome</h1>
        </motion.div>
        <motion.div
          className="hero-name"
          initial={{ x: 100, opacity: 0 }}
          animate={{
            x: showName ? 0 : 100, 
            opacity: showName ? 1 : 0, 
            transition: { duration: 1, ease: "easeOut" }
          }}
        >
          <h1>I'm Efrata Gebremichael</h1>
        </motion.div>
        <p>I’m a Software Engineer with a focus on Frontend Development and Machine Learning. I recently graduated with a Bachelor’s 
          degree in Computer Science with minors in Data Science and Mathematics. 
          I have developed a range of websites designed for various purposes, alongside sophisticated AI-driven marketing tool, and dynamic mobile applications.
           With expertise in a wide range of web development technologies and a strong focus on
           UX/UI design, I develop high-performing, visually compelling websites that deliver intuitive, user-centric experiences and seamless functionality.</p>
        <div className="hero-icons">
          <a href="https://github.com/egebremichael" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/efratagebremichael" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <Link to="/projects" className="view-projects">View Projects</Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
