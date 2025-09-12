import * as AuthService from '../services/authService.js';

export const login = async (req, res) => {
  try {
    const { token, user } = await AuthService.login(req.body);
    res.json({ token, user });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
