import express from 'express';
import { register, getProfile, listUserCompanies } from '../controllers/userController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.get('/company', listUserCompanies);
router.get('/profile', authMiddleware, getProfile);

export default router;
