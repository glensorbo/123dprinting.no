import { User } from '../models/user';

import type { RequestHandler } from 'express';

export const getUsers: RequestHandler = async (req, res, next) => {
  try {
    const users = await User.find().select('-password').exec();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).select('-password');

    res.json(user);
  } catch (error) {
    next(error);
  }
};
