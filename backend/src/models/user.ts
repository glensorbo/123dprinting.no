import { Schema, model } from 'mongoose';
import type { User as UserType  } from '../types/user';



const userSchema = new Schema<UserType>(
  {
    name: { type: String, required: true, trim: true, lowercase: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    password: { type: String, required: true },
  },
  {
    id: true,
    timestamps: true,
    versionKey: false,
  }
);

export const User = model<UserType>('User', userSchema);
