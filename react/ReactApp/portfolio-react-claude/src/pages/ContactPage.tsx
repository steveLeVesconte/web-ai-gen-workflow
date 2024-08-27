// src/pages/ContactPage.tsx
import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>Have a question or want to work together? Feel free to reach out!</p>
      <ContactForm />
    </div>
  );
};

export default ContactPage;