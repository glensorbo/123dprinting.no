import { Order } from './order';

export type User = {
  _id: string;
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
  orders?: string[] | Order[];
};
