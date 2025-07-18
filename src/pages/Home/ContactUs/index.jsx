import { useState } from "react";
import { motion } from "framer-motion";

import Container from "../../../components/Container";

import { Buttons, Labels, Titles } from "../../../constants";
import { Hosts } from "../../../constants/hosts";

import "./styles.css";


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

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields.');
      return;
    }

    console.log('Form submitted:', formData);

    setFormStatus('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' });
  };


  return (
    <section className="contact-container">
      <div className="overlay" />
      <Container>
        <div className="contact-content">
          <div className="contact-left">
            <div>
              <h3 className='contact-left-h3'>{Labels.address}:</h3>
              <p className='contact-left-p'>{Hosts.ADDRESS}</p>
            </div>
            <div>
              <h3 className='contact-left-h3'>{Labels.email}:</h3>
              <p className='contact-left-p'>{Hosts.EMAIL}</p>
            </div>
            <div>
              <h3 className='contact-left-h3'>{Labels.phone}:</h3>
              <p className='contact-left-p'>{Hosts.PHONE}</p>
            </div>
          </div>

          <div className="contact-right">
            <h2>{Titles.contactUs}</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">{Labels.name}</label>
              <input
                name="name"
                className="contact-input"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="email">{Labels.email}</label>
              <input
                name="email"
                className="contact-input"
                placeholder="Enter your mail"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="message">{Labels.message}</label>
              <textarea
                name="message"
                className="contact-textarea"
                placeholder="Lorem ipsum dolor"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />
              <button type="submit">
                {Buttons.sendMessage}
              </button>
              {formStatus && <p className="form-status">{formStatus}</p>}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;