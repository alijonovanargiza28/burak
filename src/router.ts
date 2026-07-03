import express from 'express';
const router = express.Router();
import memberController from './controllers/member.controller';

//MEMBER
router.post("/member/login", memberController.Login);

router.post("/member/signup", memberController.Signup);

router.get("/member/detail", memberController.verifyAuth)

//PRODUCT




//ORDER














// router.get('/', memberController.goHome);

// router.get('/login', memberController.getlogin);

// router.get('/signup',memberController.getSignup)

export default router;