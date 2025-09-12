import * as UserService from './userService.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import jwtConfig from '../config/jwt.js';

export const login = async ({ email, password }) => {
  const user = await UserService.findByEmail(email);
  if (!user) throw new Error('Usuario no encontrado');
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error('Contraseña incorrecta');
  const token = jwt.sign({ id: user.id, email: user.email }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
  return { token, user };
};
