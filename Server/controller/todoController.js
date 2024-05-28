const mongoose = require("mongoose");
const todo = require("../model/todoModel");

// creating todo
exports.createTodo = async (req, res) => {
  const { todoTitle, status } = req.body;

  if (!todoTitle) {
    return res.status(400).json({
      message: "Please Enter the full data.",
    });
  }

  await todo.create({
    todoTitle,
    status,
  });

  res.status(200).json({
    message: "todo created successfully.",
  });
};

// reading All the todo
exports.readAllTodo = async (req, res) => {
  const allTodo = await todo.find();

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

  const singleTodo = await todo.findById(id);

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
