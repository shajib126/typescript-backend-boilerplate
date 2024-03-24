import express from 'express'
import auth from '../../middlewares/auth'
import { BlogController } from './blog.controller'
const router = express.Router()
router.post('/create-blog',auth(),BlogController.createBlog)
router.get('/',BlogController.allBlog)

export const BlogRoutes = router