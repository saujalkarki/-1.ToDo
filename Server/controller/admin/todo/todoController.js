const mongoose = require("mongoose");
const todo = require("../../../model/todoModel");
const User = require("../../../model/userModel");

// creating todo
exports.createTodo = async (req, res) => {
  const todoUser = req.params.id;
  const { todoTitle, status } = req.body;

  if (!todoTitle) {
    return res.status(400).json({
      message: "Please Enter the full data.",
    });
  }

  await todo.create({
    todoUser,
    todoTitle,
    status,
  });

  res.status(200).json({
    message: "todo created successfully.",
  });
};

// reading All the todo
exports.readAllTodo = async (req, res) => {
  const allTodo = await todo.find().populate("todoUser");

  if (allTodo.length === 0) {
    return res.status(400).json({
      message: "No any todo found.",
    });
  }

  res.status(200).json({
    messasge: "All todo's fetched successfully.",
    allTodo,
  });
};

// reading single todo
exports.readSingleTodo = async (req, res) => {
  const id = req.params.id;

  const validId = mongoose.Types.ObjectId.isValid(id);

  if (!validId) {
    return res.status(400).json({
      message: "The id you provided is not valid.",
    });
  }

  const singleTodo = await todo.findById(id).populate("todoUser");

  if (!singleTodo) {
    return res.status(400).json({
      message: "Todo with this Id doesn't exist.",
    });
  }

  res.status(200).json({
    message: "todo fetched successfully.",
    singleTodo,
  });
};

// reading userTodo
exports.readUserTodo = async (req, res) => {
  const userId = req.params.id;

  const validId = mongoose.Types.ObjectId.isValid(userId);

  if (!validId) {
    res.status(400).json({
      message: "Invalid User Id.",
    });
  }

  const userExist = await User.findById(userId);

  if (!userExist) {
    res.status(400).json({
      message: "User with this id didn't exist.",
    });
  }

  const todos = await todo.find().populate("todoUser");

  const filteredTodo = todos.filter((todo) => {
    return todo.todoUser._id.equals(userExist._id);
  });

  if (filteredTodo.length === 0) {
    return res.status(400).json({
      message: "no todo created by this user yet.",
    });
  }

  res.status(200).json({
    message: "Todo fetched Successfully.",
    todos: filteredTodo,
  });
};

// updating todo
exports.updateTodo = async (req, res) => {
  const id = req.params.id;

  const { todoTitle, status } = req.body;

  const isValidId = mongoose.Types.ObjectId.isValid(id);

  if (!isValidId) {
    return res.status(400).json({
      message: "Invalid ID.",
    });
  }

  const todoExist = await todo.findById(id);

  if (!todoExist) {
    return res.status(400).json({
      message: "Todo with this id doesn't exist.",
    });
  }

  await todoExist.updateOne({
    todoTitle,
    status,
  });

  res.status(200).json({
    message: "todo Updated successfully",
  });
};

// deleting todo
exports.deleteTodo = async (req, res) => {
  const id = req.params.id;

  const isValidId = mongoose.Types.ObjectId.isValid(id);

  if (!isValidId) {
    return res.status(400).json({
      message: "Invalid Id.",
    });
  }

  const todoExist = await todo.findById(id);

  if (!todoExist) {
    return res.status(400).json({
      message: "Todo with this Id doesn't exists.",
    });
  }

  await todoExist.deleteOne();

  res.status(200).json({
    message: "Todo deleted successfully.",
  });
};
