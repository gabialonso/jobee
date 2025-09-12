import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
