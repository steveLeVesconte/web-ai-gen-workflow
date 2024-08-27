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