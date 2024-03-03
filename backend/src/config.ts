import dotenv from 'dotenv';
dotenv.config();

import { Config } from './types/config';

export const config: Config = {
  PORT: process.env.PORT!,
  MONGODB: process.env.MONGODB!,
  JWT_SECRET: process.env.JWT_SECRET!,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY!,
  INIT_USER: process.env.INIT_USER!,
  INIT_PWD: process.env.INIT_PWD!,
  NODE_ENV:
    process.env.NODE_ENV! === 'production' ? 'production' : 'development',
};
