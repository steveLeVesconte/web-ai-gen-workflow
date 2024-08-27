// src/models/Contact.ts
export interface Contact {
  id: string;
  email: string;
  phoneNumber?: string;
  name?: string;
  message: string;
}

// src/services/ContactDataService.ts
import { Contact } from '../models/Contact';

export class ContactDataService {
  private static BASE_URL = 'https://api.example.com/contacts'; // Replace with your API URL

  static async submitContact(contact: Omit<Contact, 'id'>): Promise<Contact> {
    const response = await fetch(this.BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    });

    if (!response.ok) {
      throw new Error('Failed to submit contact');
    }

    return response.json();
  }
}

// src/components/ContactForm.tsx
import React, { useState } from 'react';
import { Contact } from '../models/Contact';
import { ContactDataService } from '../services/ContactDataService';

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
        setErrors({ submit: 'Failed to submit. Please try again.' });
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
      {errors.submit && <p className="error">{errors.submit}</p>}
    </form>
  );
};

export default ContactForm;

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

// src/components/ContactForm.css
.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: var(--spacing-m);
}

.form-group label {
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: 600;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: var(--spacing-s) var(--spacing-m);
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: var(--font-size-m);
}

.form-group textarea {
  min-height: 150px;
  resize: vertical;
}

.error {
  color: #ef4444;
  font-size: var(--font-size-s);
  margin-top: var(--spacing-xs);
}

.submit-button {
  background-color: var(--color-primary);
  color: var(--color-text-reverse);
  padding: var(--spacing-m) var(--spacing-xl);
  border: none;
  border-radius: 4px;
  font-size: var(--font-size-m);
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.submit-button:hover {
  background-color: #2563eb;
}

.submit-button:disabled {
  background-color: #93c5fd;
  cursor: not-allowed;
}

.success-message {
  color: var(--color-secondary);
  font-weight: 600;
  margin-top: var(--spacing-m);
}
