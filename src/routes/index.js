import express from 'express';
import userRoutes from './user';
import questionRoutes from './question';
import answerRoutes from './answer';

const router = express.Router();

router.use('/user', userRoutes);
router.use('/question', questionRoutes);
router.use('/question/:questionId/answer', answerRoutes);

export default router;
