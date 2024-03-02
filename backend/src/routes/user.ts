import express from 'express';

import { getUser } from '../controllers/user';

import { checkAuth } from '../middleware/check-auth';

const router = express.Router();

router.get('/:id', checkAuth, getUser);

export { router as UserRoutes };
