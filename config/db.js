import { PrismaClient } from '@prisma/client';
import mysql from 'mysql2/promise';

const prisma = new PrismaClient();

// Create mysql2 connection pool for legacy code
export const pool = mysql.createPool({
  host: 'localhost',
  user: 'proyectousuario',
  password: 'proyectousuario',
  database: 'proyecto',
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

// Export prisma as default for Prisma-based services
// Export pool as named export for legacy SQL code
export default prisma;
