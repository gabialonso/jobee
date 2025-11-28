import { PrismaClient } from '@prisma/client';
import mysql from 'mysql2/promise';

const prisma = new PrismaClient();

export const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'proyectousuario',
  password: process.env.DB_PASSWORD || 'proyectousuario',
  database: process.env.DB_NAME || 'proyecto',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log('MySQL conectado con Prisma');
  } catch (error) {
    console.error('Error conectando a MySQL:', error);
    process.exit(1);
  }
};

export default prisma;
