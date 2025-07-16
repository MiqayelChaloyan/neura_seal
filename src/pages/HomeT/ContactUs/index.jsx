import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../../../components/Container";

import './styles.css';


const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields.');
      return;
    }

    // Example: here you'd send data to a server
    console.log('Form submitted:', formData);

    setFormStatus('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };


  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="contact-container"
    >
      <div className="overlay" />
      <Container>
        <div className="contact-content">
          <div className="contact-left">
            <div>
              <h3 className='contact-left-h3'>Address:</h3>
              <p className='contact-left-p'>Al-Duhail-North Road, P.O.Box: 5479</p>
            </div>
            <div>
              <h3 className='contact-left-h3'>Email:</h3>
              <p className='contact-left-p'>info@neura.com</p>
            </div>
            <div>
              <h3 className='contact-left-h3'>Phone:</h3>
              <p className='contact-left-p'>1-234 567-8910</p>
            </div>
          </div>

          <div className="contact-right">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                name="name"
                className="contact-input"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />

              <label htmlFor="email">Email</label>
              <input
                name="email"
                className="contact-input"
                placeholder="Enter your mail"
                value={formData.email}
                onChange={handleChange}
              />

              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                className="contact-textarea"
                placeholder="Lorem ipsum dolor"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />

              <button type="submit">Send Message</button>

              {formStatus && <p className="form-status">{formStatus}</p>}
            </form>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}

export default ContactUs;