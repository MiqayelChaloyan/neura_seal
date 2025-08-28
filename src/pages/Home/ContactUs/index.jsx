import { useState } from "react";
import { useTranslation } from "react-i18next";

import Container from "../../../components/Container";

import { Buttons, Labels, Titles } from "../../../constants";
import { Hosts } from "../../../constants/hosts";

import "./styles.css";


const ContactUs = () => {
  const { t } = useTranslation();

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
      setFormStatus(t('formStatus.pleaseFillInAllFields'));
      return;
    }

    console.log('Form submitted:', formData);

    setFormStatus(t('formStatus.thankYou'));
    setFormData({ name: '', email: '', message: '' });
  };


  return (
    <section className="contact-container">
      <div className="overlay" />
      <Container>
        <div className="contact-content">
          <div className="contact-left">
            <div>
              <h3 className='contact-left-h3'>{t('labels.address')}:</h3>
              <p className='contact-left-p'>{t('address')}</p>
            </div>
            <div>
              <h3 className='contact-left-h3'>{t('labels.email')}:</h3>
              <p className='contact-left-p'>{t('email')}</p>
            </div>
            <div />
            <div />
            <div />
          </div>

          <div className="contact-right">
            <h2>{t('titles.contactUs')}</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">{t('labels.name')}</label>
              <input
                name="name"
                className="contact-input"
                placeholder={t('placeholders.name')}
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="email">{t('labels.email')}</label>
              <input
                name="email"
                className="contact-input"
                placeholder={t('placeholders.email')}
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="message">{t('labels.message')}</label>
              <textarea
                name="message"
                className="contact-textarea"
                placeholder={t('placeholders.message')}
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />
              <button type="submit">
                {t('buttons.sendMessage')}
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