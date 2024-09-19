import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import JIS from './images/JIS-demo.mp4';
import library from './images/library-screen.png';
import curlyvid from './images/curly-demo.mp4';
import appyo from './images/appyo-demo.mov';
import heber from './images/heber.png';
import asos from './images/asos.png';
import comingsoon from './images/comingsoon.webp';

const projects = [
  { id: 1, title: 'The Curl Guidance', shortDescription: 'A curly hair care site offering personalized product recommendations', link: '#', github: 'https://github.com/egebremichael/Curly-hair-product-recommender', website: 'https://curly-hair-product-recommender.vercel.app/', video: curlyvid, technologies: ['HTML', 'CSS', 'JavaScript'], moreDescription: 'The website provides a tailored approach to curly hair care, featuring an interactive quiz that assesses users\' specific hair needs and preferences. It delivers personalized product recommendations from a database of hundreds of carefully researched items, with recommendations based on hair type, texture, composition, and specific concerns such as frizz or hydration. Built using HTML, JavaScript, and CSS, the site combines a modern design with functional features to provide an engaging and user-friendly experience.'},
  { id: 2, title: 'ASOS Influencer Recommender', shortDescription: 'An AI-driven influencer recommendation system for apparel brands ', link: '#', github: 'https://github.com/egebremichael/influencer-recommender-ml', image: asos, technologies: ['PySpark', 'Tensorflow', 'Scikit-learn', 'asos API'], moreDescription: 'InstaMatch is a sophisticated machine learning-driven influencer recommendation system designed to optimize marketing for apparel brands like ASOS. The structure of ASOS’s API matches the ideal API structure of IBM Research AI for Fashion, making the platform adaptable for other brands. It uses Multimodal Post Attentive Profiling and Natural Language Processing to analyze influencer content and audience interactions, providing recommendations based on influencer categories such as celebrities, micro-influencers, and niche creators, determined by their follower count. Powered by PySpark for scalable data processing and TensorFlow for advanced analytics, this project includes a research paper that details how InstaMatch was refined through rigorous testing of various machine learning models to achieve optimal accuracy. The paper also compares its performance with existing models, highlighting its notable innovations and contributions to the field.' },
  { id: 3, title: 'Scot Central', shortDescription: 'An app designed to streamline campus navigation and access to dining services for students', link: '#', github: 'https://github.com/egebremichael/College_app', video: JIS, technologies: ['Flutter', 'Dart', 'Firebase authenticator', 'Googlr maps API'], moreDescription: 'Leveraging Flutter for cross-platform functionality, this app supports over 2,000 College of Wooster students with real-time shuttle tracking and up-to-date dining information. Integrated with Firebase for secure authentication and Google Maps API for precise location services, it simplifies campus navigation and access.' },
  { id: 4, title: 'Heber Flowers and Decor', shortDescription: 'A website that streamlines browsing, ordering, and scheduling services for a flower shop.', link: '#', github: 'https://github.com/egebremichael/heber-decor-webpage', website: 'heberflowers.com', image: heber, technologies: ['ReactJs'], moreDescription: 'The website offers a comprehensive solution for a flower shop, enabling customers to browse and order flowers and related gifts online. It features options to schedule services for events such as weddings, birthdays, and anniversaries. Customers can also contact the store and request additional information through integrated forms. Crafted with React, the site provides a dynamic and intuitive interface, enhancing the online shopping experience and simplifying service arrangements.' },
  { id: 5, title: 'Appyo', shortDescription: 'A dynamic website that showcases a tech consulting company’s services, pricing, and recent projects', link: '#', website: 'https://www.appyyo.com', video: appyo, technologies: ['Angular', 'JavaScript'], moreDescription: 'The Appy.Yo website is a comprehensive platform for the tech consulting company, featuring detailed information on their services, package pricing, and company background. It also highlights recent projects to showcase the firm’s expertise. Developed with Angular, the site combines a modern, interactive design with user-friendly navigation, effectively presenting the company’s offerings and engaging potential clients.'},
  { id: 6, title: 'Book Avenue', shortDescription: ' A system that streamlines library operations with account creation, customizable borrowing, and early returns.', link: '#', github: 'https://github.com/egebremichael/Library_system', image: library, technologies: ['MySQL', 'HTML', 'CSS', 'Javascript'], moreDescription: 'Developed with Python and Flask, this system manages over 10,000 books, improving librarian efficiency and user experience. Features include account creation, customizable borrowing durations, and the ability to return books early for new ones. Utilizing MySQL for data management and HTML/JavaScript for the user interface, it enhances library operations and book management.'},
  { id: 7, title: 'Coming Soon!', shortDescription: 'New Project in the making', link: '#', image: comingsoon,  technologies: ['React', 'Javascript', 'aws'], moreDescription: 'Check back soon'},
];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
  <motion.div
    className="projects-page"
    initial={{ scale: 1.5 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <motion.div
      className="projects-background"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
    <div className="projects-container">
      <motion.h1
        className="projects-heading"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
      >
        Projects
      </motion.h1>
      <div className="projects-grid">
        {projects.map(project => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onClick={() => openModal(project)}
          >
            <div className="project-media-container">
              {project.video ? (
                <video className="project-media" autoPlay muted loop>
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={project.image} alt={project.title} className="project-media" />
              )}
              <div className="project-overlay">
                <div className="project-content">
                  <h2>{project.title}</h2>
                  <p>{project.shortDescription}</p>
                  <div className="tech-buttons">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-button">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&#10005;</button>
            <h2 className="modal-title">{selectedProject.title}</h2>
            <p className="modal-short-description">{selectedProject.shortDescription}</p>
            {selectedProject.video ? (
              <video className="modal-media" autoPlay controls>
                <source src={selectedProject.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-media" />
            )}
            <h3 className="modal-title">About</h3>
            <p className="modal-detailed-description">{selectedProject.moreDescription}</p>
            <h3 className="modal-title">Technologies</h3>
            <div className="modal-technologies">
              {selectedProject.technologies.map((tech, index) => (
                <span key={index} className="tech-button">{tech}</span>
              ))}
            </div>
            {selectedProject.website && (
              <div className="modal-website">
                <h3 className="modal-title">
                  <FaGlobe className="globe-icon" /> Website
                </h3>
                <p className="website-link">{selectedProject.website}</p>
              </div>
            )}
            {selectedProject.github && (
              <div className="modal-github">
                <h3 className="modal-title">
                  <FaGithub className="github-logo" /> GitHub
                </h3>
                <p className="github-link">{selectedProject.github}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};
export default ProjectsPage;
