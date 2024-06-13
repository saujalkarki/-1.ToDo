const router = require("express").Router();

// requiring controllers
const {
  createTodo,
  readAllTodo,
  readSingleTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/admin/todoController");

// requiring middleware
const isAuthenticated = require("../middleware/authenticated");
const restrictedTo = require("../middleware/restrictedTo");

const { catchAsync } = require("../services/catchAsync");

// creating a new todo and reading all todo
router
  .route("/todo")
  .get(catchAsync(readAllTodo))
  .post(isAuthenticated, restrictedTo("Admin"), catchAsync(createTodo));

// reading, updating and deleting single todo
router
  .route("/todo/:id")
  .get(catchAsync(readSingleTodo))
  .patch(catchAsync(updateTodo))
  .delete(catchAsync(deleteTodo));

module.exports = router;
