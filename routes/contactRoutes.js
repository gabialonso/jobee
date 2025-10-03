import express from 'express';
import { sendContact } from '../src/controllers/contactController.js';

const router = express.Router();

router.post('/', sendContact);

export default router;
