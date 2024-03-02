import { Express, Request } from 'express';
import { Types } from 'mongoose';
declare global {
  namespace Express {
    interface Request {
      authorizedUser: {
        id: Types.ObjectId;
      };
    }
  }
}
