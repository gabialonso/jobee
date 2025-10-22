import * as authService from '../services/user/authService.js';
import * as userService from '../services/user/userService.js';

export const login = async (req, res) => {
  try {
    const { token, user } = await authService.login(req.body);
    res.json({ token, user });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export const registerUser = async (req, res) => {
  try {
    const user = await userService.signup(req.body);
    const { token, user: userData } = await authService.login({
      email: user.email,
      password: req.body.password
    });
    res.status(201).json({
      success: true,
      message: 'Usuario registrado exitosamente',
      token,
      user: userData
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const registerCompany = async (req, res) => {
  try {
    // Registrar usuario con rol de empresa
    const user = await userService.signup({
      ...req.body,
      role: 'companies'
    });
    const { token, user: userData } = await authService.login({
      email: user.email,
      password: req.body.password
    });
    res.status(201).json({
      success: true,
      message: 'Empresa registrada exitosamente',
      token,
      user: userData
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
