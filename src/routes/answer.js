import express from 'express';
import { checkAuthToken, validateAnswer } from '../middlewares';
import { answerController } from '../controllers';

const route = express.Router({ mergeParams: true });

route.post('/', checkAuthToken, validateAnswer, answerController.answerQuestion);
route.get('/', answerController.getQuestionAnswers);

export default route;
