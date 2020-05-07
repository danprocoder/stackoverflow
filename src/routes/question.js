import express from 'express';
import { checkAuthToken } from '../middlewares';
import { questionController } from '../controllers';

const route = express.Router();

route.post('/', checkAuthToken, questionController.create);
route.get('/', checkAuthToken, questionController.getAll);
route.get('/:id', checkAuthToken, questionController.getOne);

export default route;
