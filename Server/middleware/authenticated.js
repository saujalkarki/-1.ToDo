const jwt = require("jsonwebtoken");
const promisify = require("util").promisify;
const User = require("../model/userModel");

const isAuthenticated = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(400).json({
      message: "Token missed.",
    });
  }

  // jwt.verify(token, process.env.PRIVATE_KEY, async (err, sucss) => {
  //   if (err) {
  //     res.status(400).json({
  //       message: "Login Failed",
  //     });
  //   } else {
  //     res.status(200).json({
  //       message: "Logged in successfully.",
  //     });
  //     console.log(sucss);
  //     const userExist = await User.findById(sucss.id);
  //     console.log(userExist);
  //     req.user = userExist;
  //   }
  // });

  try {
    const result = await promisify(jwt.verify)(token, process.env.PRIVATE_KEY);

    if (!result) {
      return res.status(400).json({
        message: "Something went wrong.",
      });
    }

    const userExist = await User.findById(result.id);
    if (!userExist) {
      return res.status(404).message({
        message: "User with this id Doesn't exist.",
      });
    }

    req.user = userExist;

    next();
  } catch (err) {
    return res.status(400).json({
      message: ` There is some error called : ${err}.`,
    });
  }
};

module.exports = isAuthenticated;
