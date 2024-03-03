import mongoose from 'mongoose';

import { config } from '../../config';
import { InternalServerErrorException } from '../../exceptions/internal-server-error';
import { seedData } from './seed-data';

const mongoUrl = config.MONGODB;

export const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(mongoUrl);
    console.log('🎉 Connected to DB 🎉');

    await seedData();
  } catch (error) {
    console.log(
      new InternalServerErrorException('Connection to DB failed, exiting...')
    );
    process.exit(1);
  }
};
