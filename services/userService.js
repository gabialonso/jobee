import 'express-async-errors';
import prisma from '../config/db.js';
import bcrypt from 'bcryptjs';

export const signup = async ({ name, email, password,Ci,brithday}) => {
  const userExists = await prisma.user.findUnique({ where: { email } });
  if (userExists) throw new Error('El usuario ya existe');
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword }
  });
  return user;
};

export const findByEmail = async (email) => {
  return await prisma.user.findUnique({ where: { email } });
};
