import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";
import makeUploader from "./libs/utils/uploader";
import productController from "./controllers/product.controller";
import orderController from "./controllers/order.controller";

//MEMBER
router.get("/member/restaurant", memberController.getRestaurant);

router.post("/member/login", memberController.Login);

router.post("/member/signup", memberController.Signup);

router.post(
  "/member/logout",
  memberController.verifyAuth,
  memberController.logout,
);

router.get(
  "/member/detail",
  memberController.verifyAuth,
  memberController.getMemberDetail,
);

router.post(
  "/member/update",
  memberController.verifyAuth,
  makeUploader("members").single("memberImage"),
  memberController.updateMember,
);

router.get("/member/top-users", memberController.getTopUsers);

router.get("/products/all", productController.getProducts);

router.get(
  "/product/:id",
  memberController.retrieveAuth,
  productController.getProduct,
);

router.post(
  "/order/create",
  memberController.verifyAuth,
  orderController.createOrder,
);

router.get("/order/all", memberController.verifyAuth,
    orderController.getMyOrders
)
// router.get('/', memberController.goHome);

// router.get('/login', memberController.getlogin);

// router.get('/signup',memberController.getSignup)

export default router;
