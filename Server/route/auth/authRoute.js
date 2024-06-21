const router = require("express").Router();

const {
  registerUser,
  userLogin,
  forgotPassword,
  verifyOtp,
  changePassword,
} = require("../../controller/auth/authController");

const validateMiddleware = require("../../middleware/validateMiddleware");
const authRegisterSchema = require("../../validators/authRegisterSchema");

const { catchAsync } = require("../../services/catchAsync");

// register new User
router
  .route("/register")
  .post(validateMiddleware(authRegisterSchema), catchAsync(registerUser));
// login as User
router.route("/login").post(catchAsync(userLogin));
// forgot password
router.route("/forgotpassword").post(catchAsync(forgotPassword));
// verify OTP
router.route("/verifyotp").post(catchAsync(verifyOtp));
// change password
router.route("/changepassword").post(catchAsync(changePassword));

module.exports = router;
