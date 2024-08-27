// src/components/ContactForm.tsx
import React, { useState } from 'react';
import { Contact } from '../models/Contact';
import { ContactDataService } from '../services/ContactDataService';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<Omit<Contact, 'id'>>({
    email: '',
    phoneNumber: '',
    name: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Contact, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof Contact, string>> = {};

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    if (!formData.message || formData.message.length < 3 || formData.message.length > 300) {
      newErrors.message = 'Message must be between 3 and 300 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await ContactDataService.submitContact(formData);
        setSubmitSuccess(true);
        setFormData({ email: '', phoneNumber: '', name: '', message: '' });
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors( {  message: 'Failed to submit. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="email">Email (required)</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message (required)</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        {errors.message && <span className="error">{errors.message}</span>}
      </div>
      <button type="submit" className="submit-button" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
      {submitSuccess && <p className="success-message">Thank you for your message!</p>}
{/*       {errors.submit && <p className="error">{errors.submit}</p>} */}
    </form>
  );
};

export default ContactForm;