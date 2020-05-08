import express from 'express';
import { checkAuthToken } from '../middlewares';
import { questionController } from '../controllers';

const route = express.Router();

route.post('/', checkAuthToken, questionController.create);
route.get('/', checkAuthToken, questionController.getAll);
route.get('/:id', checkAuthToken, questionController.getOne);

route.get('/:id/upvote', checkAuthToken, questionController.upvote);
route.get('/:id/downvote', checkAuthToken, questionController.downvote);

export default route;
