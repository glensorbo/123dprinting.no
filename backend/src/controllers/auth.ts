import type { RequestHandler } from 'express';
import bcrypt from 'bcrypt';

import { User } from '../models/user';
import { BadRequestException } from '../exceptions/bad-request';
import { InternalServerErrorException } from '../exceptions/internal-server-error';
import { UnauthorizedException } from '../exceptions/unauthorized';
import { createJwtToken } from '../features/jwt/create-jwt';
import { JwtPayload } from '../types/jwt-payload';

export const login: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) throw new BadRequestException();

    const user = await User.findOne({ email }).exec();

    if (!user) throw new InternalServerErrorException('Nein!');

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) throw new UnauthorizedException();

    user.password = '';

    const payload: JwtPayload = {
      user: {
        id: user._id,
      },
    };

    const token = createJwtToken(payload);

    res.json({ user, token });
  } catch (error) {
    next(error);
  }
};
