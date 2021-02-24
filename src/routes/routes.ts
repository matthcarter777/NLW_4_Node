import { Router } from 'express';

import UserController from '../controllers/UserController';
import SurveysController from '../controllers/SurveysController';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();

/* Users */
router.post('/users', userController.create);

/* Surveys */

router.get('/surveys', surveysController.index);
router.post('/surveys', surveysController.create);

export default router;