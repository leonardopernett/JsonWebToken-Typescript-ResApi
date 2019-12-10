import {Router, Request, Response } from "express"
import { signup, profile, signin } from '../controller/AuthController'
import {tokenValidator} from '../libs/verifyToken'
const router:Router =  Router()

router.route('/signup').post(signup)
router.post('/signin', signin)
router.get('/profile', tokenValidator ,profile)


export default router