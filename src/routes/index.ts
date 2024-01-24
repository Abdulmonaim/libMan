import { Router } from 'express';

import { Routes } from './routesPaths/index.js';
const router = Router();

// Routes
import bookRouter from './user.route.js';
import userRouter from './user.route.js';
import sessionRouter from './user.route.js';

// Routes
router.use(Routes.book, bookRouter);
router.use(Routes.user, userRouter);
router.use(Routes.session, sessionRouter);

export default router;
