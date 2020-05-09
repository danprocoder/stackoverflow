import express from 'express';
import { checkAuthToken } from '../middlewares';
import { answerController } from '../controllers';

const route = express.Router({ mergeParams: true });

route.post('/', checkAuthToken, answerController.answerQuestion);
route.get('/', answerController.getQuestionAnswers);

export default route;
