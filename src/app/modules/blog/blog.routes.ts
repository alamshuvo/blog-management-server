import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import { blogValidation } from './blog.validation';
import { blogController } from './blog.controller';

const router = Router();
router.post(
  '/',
  validateRequest(blogValidation.createBlogsValidation),
  blogController.createBlog,
);

export const blogRoutes = router;
