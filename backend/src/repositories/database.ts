import mongoose from 'mongoose';

import { config } from '../config';
import { InternalServerErrorException } from '../exceptions/internal-server-error';
import { User } from '../models/user';
import { hashPassword } from '../features/pwd/hash-password';

const mongoUrl = config.MONGODB;

const initUser = config.INIT_USER;
const initPwd = config.INIT_PWD;

export const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(mongoUrl);
    console.log('🎉 Connected to DB 🎉');

    const users = await User.find().exec();

    if (users.length < 1) {
      const password = await hashPassword(initPwd);
      const user = new User({
        name: 'Glen Sørbø',
        email: initUser,
        password,
      });
      await user.save();
      console.log('No users was found, created an admin user...');
      console.log(initUser);
      console.log(initPwd);
    }
  } catch (error) {
    console.log(
      new InternalServerErrorException('Connection to DB failed, exiting...')
    );
    process.exit(1);
  }
};
