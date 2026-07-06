import express from 'express';
const router = express.Router();
import memberController from './controllers/member.controller';
import makeUploader from './libs/utils/uploader';

//MEMBER
router.post("/member/login", 
    memberController.Login);

router.post("/member/signup", 
    memberController.Signup);

router.post("/member/logout", 
    memberController.verifyAuth, 
    memberController.logout)

router.get("/member/detail", 
    memberController.verifyAuth,
    memberController.getMemberDetail

 )

 router.post("/member/update",
    memberController.verifyAuth,
    makeUploader("members").single("memberImage"),
    memberController.updateMember
 )
//PRODUCT




//ORDER














// router.get('/', memberController.goHome);

// router.get('/login', memberController.getlogin);

// router.get('/signup',memberController.getSignup)

export default router;