const router = require("express").Router();

const {
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controller/admin/user/userController");
const allowedTo = require("../middleware/allowedTo");
const isAuthenticated = require("../middleware/authenticated");
const { catchAsync } = require("../services/catchAsync");

router
  .route("/user")
  .get(isAuthenticated, allowedTo("Admin"), catchAsync(getUser));

router
  .route("/user/:id")
  .get(isAuthenticated, allowedTo("Admin"), catchAsync(getSingleUser))
  .patch(isAuthenticated, allowedTo("Admin"), catchAsync(updateUser))
  .delete(isAuthenticated, allowedTo("Admin"), catchAsync(deleteUser));

module.exports = router;
