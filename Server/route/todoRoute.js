const router = require("express").Router();

const {
  createTodo,
  readAllTodo,
  readSingleTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todoController");

router.route("/todo").get(readAllTodo).post(createTodo);
router
  .route("/todo/:id")
  .get(readSingleTodo)
  .patch(updateTodo)
  .delete(deleteTodo);

module.exports = router;
