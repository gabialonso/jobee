import * as UserService from '../src/services/userService.js';

export const register = async (req, res) => {
  try {
    const user = await UserService.register(req.body);
    res.status(201).json({ message: 'Usuario registrado', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getProfile = async (req, res) => {
  res.json({ user: req.user });
};
