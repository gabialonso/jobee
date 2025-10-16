import express, { Router } from 'express';
import { login, registerUser, registerCompany } from '../controllers/authController.js';
import { validateLogin, validateRegister } from '../middlewares/validationMiddleware.js';

const router = express.Router();

router.post('/login', validateLogin, login);
router.post('/register/user', validateRegister, registerUser);
router.post('/register/company', validateRegister, registerCompany);

export default router;
