import type { User } from '../user';

export type LoginResponse = {
  user: User;
  access_token: string;
};
