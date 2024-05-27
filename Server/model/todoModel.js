const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoModel = new Schema(
  {
    todoTitle: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["not started", "In progress", "Completed"],
      default: "not started",
    },
  },
  { timestamps: true }
);

const todo = mongoose.model("todo", todoModel);

module.exports = todo;
