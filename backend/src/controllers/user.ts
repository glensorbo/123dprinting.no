import { RequestHandler } from 'express';

import { User } from '../models/user';

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).select('-password');

    res.json(user);
  } catch (error) {
    next(error);
  }
};
