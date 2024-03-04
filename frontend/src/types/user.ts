export type User = {
  _id: string;
  role: 'admin' | 'customer';
  firstName: string;
  lastName: string;
  email: string;
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
