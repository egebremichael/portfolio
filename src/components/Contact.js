import React, { useState } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      const response = await fetch('https://efratagebremichael.com/api/send-email', {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong. Please try again later.');
      }
  
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError(err.message);
    }
  };
  
  

  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="background-image"
        initial={{ scale: 1.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="contact-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="contact-title">Contact Me</h2>
        <p className="email-contact">
          Get in touch or shoot me an email directly at <a href="mailto:ephrathafisseha@gmail.com">ephrathafisseha@gmail.com</a>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Name"
            />
          </div>
          <div className="input-container">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </div>
          <div className="input-container">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Message"
            />
          </div>
          {error && <p className="error">{error}</p>}
          {isSubmitted && <p className="success">Message sent successfully!</p>}
          <button type="submit" className="send-button">Send Message</button>
        </form>
        <Link to="/" className="return-home">Return to Homepage</Link>
      </motion.div>
    </section>
  );
};

export default Contact;
