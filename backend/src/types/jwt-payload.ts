import { Types } from 'mongoose';

export type JwtPayload = {
  [key: string]: {
    id: Types.ObjectId;
  };
};
