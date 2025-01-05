import { Router } from "express";
import { blogRoutes } from "../modules/blog/blog.routes";

const router = Router();
const modulRoutes = [
    {
        path:'/blog',
        route:blogRoutes
    }
]
modulRoutes.forEach((route)=>router.use(route.path,route.route))

export default router