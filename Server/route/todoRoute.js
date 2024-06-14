const router = require("express").Router();

// requiring controllers
const {
  createTodo,
  readAllTodo,
  readSingleTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/admin/todo/todoController");

// requiring middleware
const isAuthenticated = require("../middleware/authenticated");
const allowedTo = require("../middleware/allowedTo");

const { catchAsync } = require("../services/catchAsync");

// creating a new todo and reading all todo
router
  .route("/todo")
  .get(isAuthenticated, allowedTo("Admin"), catchAsync(readAllTodo))
  .post(isAuthenticated, allowedTo("Admin"), catchAsync(createTodo));

// reading, updating and deleting single todo
router
  .route("/todo/:id")
  .get(isAuthenticated, allowedTo("Admin"), catchAsync(readSingleTodo))
  .patch(isAuthenticated, allowedTo("Admin"), catchAsync(updateTodo))
  .delete(isAuthenticated, allowedTo("Admin"), catchAsync(deleteTodo));

module.exports = router;
