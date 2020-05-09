import express from 'express';
import { checkAuthToken, questionExists, validateQuestion } from '../middlewares';
import { questionController } from '../controllers';

const route = express.Router();

route.post('/', checkAuthToken, validateQuestion, questionController.create);
route.get('/', questionController.getAll);
route.get('/:id', questionExists, questionController.getOne);

route.put('/:id/upvote', checkAuthToken, questionExists, questionController.upvote);
route.put('/:id/downvote', checkAuthToken, questionExists, questionController.downvote);

export default route;
