import express from 'express';
const router = express.Router();
import memberController from './controllers/member.controller';
import makeUploader from './libs/utils/uploader';
import productController from './controllers/product.controller';


//MEMBER
router.get("/member/restaurant",
   memberController.getRestaurant)

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

 router.get(
   "/member/top-users",
   memberController.getTopUsers,
 );
router.get(
    "/product/all",
    productController.getproduct
)
 

// router.get('/', memberController.goHome);

// router.get('/login', memberController.getlogin);

// router.get('/signup',memberController.getSignup)

export default router;