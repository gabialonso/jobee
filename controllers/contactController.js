import * as ContactService from '../services/contactService.js';

export const sendContact = async (req, res) => {
  try {
    const contact = await ContactService.saveContact(req.body);
    res.status(201).json({ message: 'Mensaje recibido', contact });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
