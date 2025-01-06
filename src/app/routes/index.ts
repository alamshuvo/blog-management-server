import { Router } from 'express';
import { blogRoutes } from '../modules/blog/blog.routes';
import { userRoutes } from '../modules/user/user.routes';
import { authRoute } from '../modules/auth/auth.route';

const router = Router();
const modulRoutes = [
  {
    path: '/blogs',
    route: blogRoutes,
  },
  {
    path:'/auth',
    route:authRoute
  }
];
modulRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
