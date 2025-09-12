import prisma from '../config/db.js';

export const saveContact = async ({ name, email, message }) => {
  const contact = await prisma.contact.create({
    data: { name, email, message }
  });
  return contact;
};
