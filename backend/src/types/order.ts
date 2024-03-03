import { User } from './user';

export type Order = {
  _id?: string;
  customer: string | User;
  date: string;
  status: {
    order: string;
    payment: string;
    delivery: string;
  };
  files: string[];
};
