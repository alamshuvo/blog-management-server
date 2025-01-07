import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import { authValidation } from './auth.validation';
import { authController } from './auth.controller';

const router = Router();

router.post(
  '/register',
  validateRequest(authValidation.userValidationSchema),
  authController.createUser,
);

router.post(
  '/login',
  validateRequest(authValidation.loginValidationSchema),
  authController.loginUser,
);

//admin actions
//block user
router.patch('/admin/users/:userId/block');
export const authRoute = router;
