import { Router } from 'express';
import { blogRoutes } from '../modules/blog/blog.routes';
import { userRoutes } from '../modules/user/user.routes';

const router = Router();
const modulRoutes = [
  {
    path: '/blogs',
    route: blogRoutes,
  },
  {
    path:'/auth',
    route:userRoutes
  }
];
modulRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
