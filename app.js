import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './src/routes/authRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import contactRoutes from './src/routes/contactRoutes.js';
import coursesRoutes from './src/routes/coursesRoutes.js';
import purchaseRoutes from './src/routes/purchaseRoutes.js';
import personRoutes from './src/routes/personRoutes.js';
import companyRoutes from '.src/routes/companyRoutes.js';
import { connectDB } from './src/config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar CORS para permitir el frontend
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/courses', coursesRoutes);
app.use('/api/person', personRoutes);
app.use('/api/purchase', purchaseRoutes);
app.use('/api/company', companyRoutes);

// Conexión a la base de datos
connectDB();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});