const router = require("express").Router();

const {
  registerUser,
  userLogin,
  forgotPassword,
  verifyOtp,
  changePassword,
} = require("../../controller/auth/authController");

// register new User
router.route("/register").post(registerUser);
// login as User
router.route("/login").post(userLogin);
// forgot password
router.route("/forgotpassword").post(forgotPassword);
// verify OTP
router.route("/verifyotp").post(verifyOtp);
// change password
router.route("/changepassword").post(changePassword);

module.exports = router;
