import jwt from 'jsonwebtoken';

import { config } from '../../config';

import { InternalServerErrorException } from '../../exceptions/internal-server-error';

import type { DecodedToken } from '../../types/decoded-token';

export const decodeJwtToken = (token: string) => {
  try {
    const decodedToken = jwt.verify(token, config.JWT_SECRET);
    if (!decodedToken) throw new InternalServerErrorException();
    return decodedToken as DecodedToken;
  } catch (error) {
    throw error;
  }
};
