import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import 'express-async-errors';

import stripeRoutes from './routes/stripeRoutes.js';
import postulationRoutes from './routes/postulationRoutes.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import purchaseRoutes from './routes/purchaseRoutes.js';
import personRoutes from './routes/personRoutes.js';
import companyRoutes from './routes/companyRoutes.js';
import openAiRoutes from './routes/openAiRoutes.js';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  'http://localhost:5173',
  'https://jobee.anima.edu.uy'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, origin);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true
}));

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/person', personRoutes);
app.use('/api/purchase', purchaseRoutes);
app.use('/api/company', companyRoutes);
app.use('/api/stripe', stripeRoutes);
app.use('/api/openAi', openAiRoutes);
app.use('/api/postulation', postulationRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
