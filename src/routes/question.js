import express from 'express';
import { checkAuthToken } from '../middlewares';
import { questionController } from '../controllers';

const route = express.Router();

route.post('/', checkAuthToken, questionController.create);
route.get('/', checkAuthToken, questionController.getAll);
route.get('/:id', checkAuthToken, questionController.getOne);

route.put('/:id/upvote', checkAuthToken, questionController.upvote);
route.put('/:id/downvote', checkAuthToken, questionController.downvote);

export default route;
