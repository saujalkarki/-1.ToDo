const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userModel = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
      unique: true,
    },
    userPassword: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
      select: false,
    },
    otp: {
      type: Number,
      select: false,
    },
    isOtpVerified: {
      type: Boolean,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userModel);
module.exports = User;
