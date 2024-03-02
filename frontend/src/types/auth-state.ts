import { User } from './user';

export type AuthState = {
  isAuthenticated: boolean;
  user: User;
  token: string | null;
};
