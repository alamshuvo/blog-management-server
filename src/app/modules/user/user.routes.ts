import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import userValidationSchema from './user.validation';
import { userController } from './user.controller';
import { USER_ROLE } from '../auth/auth.const';
import auth from '../../middleware/auth';

const router = Router();
  

router.patch('/users/:userId/block',auth(USER_ROLE.admin),userController.updateUser)

export const userRoutes = router;
