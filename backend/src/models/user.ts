import { Schema, Types, model } from 'mongoose';
import type { User as UserType } from '../types/user';

const userSchema = new Schema<UserType>(
  {
    role: { type: String },
    firstName: { type: String, required: true, trim: true, lowercase: true },
    lastName: { type: String, required: true, trim: true, lowercase: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    address: {
      street: { type: String },
      number: { type: String },
    },
    postal: {
      code: { type: String },
      region: { type: String },
    },
    phone: { type: String },
    password: { type: String, required: true },
    orders: [{ type: Types.ObjectId, ref: 'Order' }],
  },
  {
    id: true,
    timestamps: true,
    versionKey: false,
  }
);

export const User = model<UserType>('User', userSchema);
