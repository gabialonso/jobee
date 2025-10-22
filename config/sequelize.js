import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Uses DATABASE_URL from .env: mysql://user:pass@host:port/db
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  logging: false,
});

export default sequelize;

