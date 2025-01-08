import { Router } from 'express';
import { userController } from './user.controller';
import { USER_ROLE } from '../auth/auth.const';
import auth from '../../middleware/auth';

const router = Router();

router.patch(
  '/users/:userId/block',
  auth(USER_ROLE.admin),
  userController.updateUser,
);

// delete blog
router.delete('/blogs/:id', auth(USER_ROLE.admin), userController.deleteBlog);
export const userRoutes = router;
