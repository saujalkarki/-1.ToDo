const router = require("express").Router();

const {
  registerUser,
  userLogin,
  forgotPassword,
  verifyOtp,
  changePassword,
} = require("../../controller/auth/authController");

const { catchAsync } = require("../../services/catchAsync");

// register new User
router.route("/register").post(catchAsync(registerUser));
// login as User
router.route("/login").post(catchAsync(userLogin));
// forgot password
router.route("/forgotpassword").post(catchAsync(forgotPassword));
// verify OTP
router.route("/verifyotp").post(catchAsync(verifyOtp));
// change password
router.route("/changepassword").post(catchAsync(changePassword));

module.exports = router;
