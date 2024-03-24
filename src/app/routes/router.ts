import { Router } from "express";
import { UserRoutes } from "../modules/User/user.routes";
import { BlogRoutes } from "../modules/Blog/blog.routes";

const router = Router()

const moduleRoutes = [
    {
        path:'/user',
        route:UserRoutes
    },
    {
        path:'/blog',
        route:BlogRoutes
    }
]


moduleRoutes.forEach((route)=>router.use(route.path,route.route))
export default router