import express from 'express';

import { getUser, getUsers } from '../controllers/user';

import { checkAuth } from '../middleware/check-auth';

const router = express.Router();

router.get('/:id', checkAuth, getUser);

router.get('/', checkAuth, getUsers);

export { router as UserRoutes };
