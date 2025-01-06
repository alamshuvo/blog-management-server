import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import { blogValidation } from './blog.validation';
import { blogController } from './blog.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../auth/auth.const';

const router = Router();
router.post(
  '/',auth(USER_ROLE.user),
  validateRequest(blogValidation.createBlogsValidation),
  blogController.createBlog,
);

export const blogRoutes = router;
