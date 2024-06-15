const mongoose = require("mongoose");
const User = require("../../../model/userModel");

// getting all users
exports.getUser = async (req, res) => {
  const users = (
    await User.find().select(["-__v", "+role", "-userPassword"])
  ).filter((user) => {
    return user.role !== "Admin";
  });

  if (users.length === 0) {
    return res.status(400).json({
      message: "No any Users found.",
    });
  }

  res.status(200).json({
    message: "Users fetched successfully.",
    users,
  });
};

// getting single users
exports.getSingleUser = async (req, res) => {
  const id = req.params.id;

  const validId = mongoose.Types.ObjectId.isValid(id);

  if (!validId) {
    return res.status(400).json({
      message: "Invalid ID.",
    });
  }

  const userExist = await User.findById(id);

  if (!userExist) {
    return res.status(400).json({
      message: "User with this Id doesnot Exist",
    });
  }

  res.status(200).json({
    message: "User fetched successfully.",
    user: userExist,
  });
};

// updating user
exports.updateUser = async (req, res) => {
  const { userName, userEmail } = req.body;
  const id = req.params.id;

  const validId = mongoose.Types.ObjectId.isValid(id);

  if (!validId) {
    return res.status(400).json({
      message: "Invalid ID.",
    });
  }

  const userExist = await User.findById(id);

  if (!userExist) {
    return res.status(400).json({
      message: "User with this Id doesn't exist.",
    });
  }

  await userExist.updateOne({ userName, userEmail });

  res.status(200).json({
    message: "User Updated Successfully",
    user: await User.findById(id),
  });
};

// deleting user
exports.deleteUser = async (req, res) => {
  const id = req.params.id;

  const validId = mongoose.Types.ObjectId.isValid(id);

  if (!validId) {
    return res.status(400).json({
      message: "Invalid ID",
    });
  }

  const userExist = await User.findById(id);

  if (!userExist) {
    return res.status(400).json({
      message: "User with this ID doesn't exist.",
    });
  }

  await User.findByIdAndDelete(id);

  res.status(200).json({
    message: "User deleted successfully.",
  });
};
