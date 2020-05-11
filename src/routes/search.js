import express from 'express';
import { searchController } from '../controllers';
import { validateSearchQuery } from '../middlewares';

const router = express.Router()

router.get('/question', validateSearchQuery, searchController.searchQuestions);
router.get('/user', validateSearchQuery, searchController.searchUsers);
router.get('/answer', validateSearchQuery, searchController.searchAnswer);

export default router;
