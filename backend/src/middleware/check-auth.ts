import { RequestHandler } from 'express';
import { UnauthorizedException } from '../exceptions/unauthorized';
import { decodeJwtToken } from '../features/jwt/decode-jwt';
import { User } from '../models/user';

export const checkAuth: RequestHandler = async (req, res, next) => {
  try {
    let token;
    const bearer = req.header('Authorization');
    if (bearer) {
      token = bearer.split(' ')[1];
    }
    if (!token) {
      throw new UnauthorizedException();
    }
    const decodedToken = decodeJwtToken(token);
    const user = await User.findById(decodedToken.user.id);

    if (!user) {
      throw new UnauthorizedException();
    }

    req.authorizedUser = { id: user._id };

    next();
  } catch (error) {
    next(error);
  }
};
