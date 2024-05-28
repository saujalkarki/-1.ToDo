const router = require("express").Router();

// requiring controllers
const {
  createTodo,
  readAllTodo,
  readSingleTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todoController");

// creating a new todo and reading all todo
router.route("/todo").get(readAllTodo).post(createTodo);

// reading, updating and deleting single todo
router
  .route("/todo/:id")
  .get(readSingleTodo)
  .patch(updateTodo)
  .delete(deleteTodo);

module.exports = router;
