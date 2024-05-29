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
      enum: ["Not Started", "In Progress", "Completed"],
      default: "Not Started",
    },
  },
  { timestamps: true }
);

const todo = mongoose.model("todo", todoModel);

module.exports = todo;
