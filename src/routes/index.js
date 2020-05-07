import express from 'express';
import userRoutes from './user';
import questionRoutes from './question';

const router = express.Router();

router.use('/user', userRoutes);
router.use('/question', questionRoutes);

export default router;
