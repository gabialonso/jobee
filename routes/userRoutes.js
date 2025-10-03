import express from 'express';
import { register, getProfile } from '../src/controllers/userController.js';
import { authMiddleware } from '../src/middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.get('/profile', authMiddleware, getProfile);

export default router;
