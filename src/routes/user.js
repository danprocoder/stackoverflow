import express from 'express';
import { validateLogin, validateSignup } from '../middlewares';
import { userController } from '../controllers';

const router = express.Router();

router.post('/signup', validateSignup, userController.addNewUser);
router.post('/auth', validateLogin, userController.authenticateUser);

export default router;
