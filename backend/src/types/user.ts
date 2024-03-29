import { Types } from 'mongoose';

export type User = {
  _id?: Types.ObjectId;
  role: 'admin' | 'customer';
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address?: {
    street: string;
    number: string;
  };
  postal?: {
    code: string;
    region: string;
  };
  phone?: string;
};
