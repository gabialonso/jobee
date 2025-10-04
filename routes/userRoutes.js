import express from 'express';
import { register, getProfile } from '../controllers/userController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.get('/profile', authMiddleware, getProfile);

export default router;
