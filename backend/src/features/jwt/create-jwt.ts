import jwt, { SignOptions } from 'jsonwebtoken';

import { config } from '../../config';
import { InternalServerErrorException } from '../../exceptions/internal-server-error';

import type { JwtPayload } from '../../types/jwt-payload';

export const createJwtToken = (
  payload: JwtPayload,
  expiresIn?: SignOptions['expiresIn']
) => {
  try {
    const token = jwt.sign(payload, config.JWT_SECRET, {
      expiresIn: expiresIn ?? '32d',
    });
    if (!token) throw new InternalServerErrorException();
    return token;
  } catch (error) {
    throw error;
  }
};
