const router = require("express").Router();

// requiring controllers
const {
  createTodo,
  readAllTodo,
  readSingleTodo,
  updateTodo,
  deleteTodo,
  readUserTodo,
} = require("../controller/admin/todo/todoController");

// requiring middleware
const isAuthenticated = require("../middleware/authenticated");
const allowedTo = require("../middleware/allowedTo");

const { catchAsync } = require("../services/catchAsync");

// creating a new todo and reading all todo
router
  .route("/todo")
  .get(isAuthenticated, allowedTo("Admin"), catchAsync(readAllTodo));

// reading, updating and deleting single todo
router
  .route("/todo/:id")
  .post(isAuthenticated, allowedTo("Admin"), catchAsync(createTodo))
  .get(isAuthenticated, allowedTo("Admin"), catchAsync(readSingleTodo))
  .patch(isAuthenticated, allowedTo("Admin"), catchAsync(updateTodo))
  .delete(isAuthenticated, allowedTo("Admin"), catchAsync(deleteTodo));

// reading todo by user
router.route("/userTodo/:id").get(readUserTodo);

module.exports = router;
