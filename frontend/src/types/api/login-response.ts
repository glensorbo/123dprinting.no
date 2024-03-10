import type { User } from '../user';

export type LoginResponse = {
  user: User;
  token: string;
};
