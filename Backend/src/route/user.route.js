import { Router } from 'express'
import { forgetPasswordRecoveryByEmail, loginUser, logoutUser, registerUser, resetPassword } from '../controller/user.controller.js';
import { verifyjwt } from '../middlewares/auth.middleware.js';

const router = Router()

router.route('/login').post(loginUser)
router.route('/register').post(registerUser)
router.route('/logout').post(verifyjwt, logoutUser)
router.route('/forget-password').post(forgetPasswordRecoveryByEmail)
router.route('/reset-password').post(resetPassword)

export default router;