import express from 'express'
import { UserController } from './user.controller'
import auth from '../../middlewares/auth'
const router = express.Router()

router.get('/my-profile',auth(),UserController.userProfile)
router.post('/sign-up',UserController.signUpUser)
router.post('/sign-in',UserController.loginUser)
export const UserRoutes = router