import express from 'express';
import { userController } from '../controllers/index';

const router = express.Router();

router.post('/signup', userController.addNewUser);
router.post('/auth', userController.authenticateUser);

export default router;
