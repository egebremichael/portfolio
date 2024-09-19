import React from 'react';
import './Research.css';
import { motion } from 'framer-motion';

const Research = () => {
  const researchPapers = [
    {
      title: "Instagram Influencer Recommendation System Research",
      image: "/IS.png",
      description: "This senior thesis presents InstaMatch, an advanced AI-driven influencer recommendation system designed for the apparel industry. Honored for its innovation, the research encompasses a comprehensive process, including a literature review on machine learning applications in e-commerce and the mechanics of recommender systems. The system integrates ASOS’s API with extensive Instagram influencer datasets, utilizing PySpark and TensorFlow to analyze influencers' images and bios. This analysis facilitates the classification of influencers and understanding their target audiences, thereby improving the accuracy of product recommendations. The paper also details the development of an ensemble model, tested against various recommender systems and machine learning models to achieve high accuracy. It includes a comparative analysis with existing models, showcasing the system’s notable advancements and contributions to influencer marketing strategies.",
      link: "/path/to/paper1.pdf"
    },
    {
      title: "Cross-Platform College App UX Research",
      image: "/jIS.png",
      description: "This study focuses on the research and development of a Student Engagement App for the College of Wooster, created using Flutter and Dart. The research involved a comprehensive UX/UI study, examining mobile app functionality across various platforms. Key elements included the application of design principles for accessibility and the execution of multiple usability testing phases. These rigorous research methodologies ensured the app's effectiveness in delivering real-time shuttle tracking and detailed dining information for over 2,000 students. The study highlights the integration of theoretical research with practical development to enhance user experience and accessibility in mobile applications.",
      link: "/path/to/paper2.pdf"
    }
  ];

  return (
    <motion.div
      className="research-page"
      initial={{ scale: 1.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="research-background"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <section id="research" className="research-page">
        <div className="research-container">
          <h2 className="research-heading">Research Papers</h2>
          <motion.div
            className="research-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {researchPapers.map((paper, index) => (
              <motion.div
                className="research-card"
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="research-image-container">
                  <img src={paper.image} alt={`Research ${index + 1}`} className="research-image" />
                  <div className="research-overlay">
                    <div className="research-content">
                      <h2>{paper.title}</h2>
                      <p>{paper.description}</p>
                      <a href={paper.link} className="research-link">View Full Paper</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Research;
