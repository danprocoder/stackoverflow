import express from 'express';
import { searchController } from '../controllers';

const router = express.Router()

router.get('/question', searchController.searchQuestions);
router.get('/user', searchController.searchUsers);
router.get('/answer', searchController.searchAnswer);

export default router;
