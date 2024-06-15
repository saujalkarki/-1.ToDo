const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");

const sendEmail = require("../../services/sendEmail");

// requiring model
const User = require("../../model/userModel");

// register new user
exports.registerUser = async (req, res) => {
  const { registerUserName, registerEmail, registerPassword } = req.body;

  if (!registerUserName || !registerEmail || !registerPassword) {
    return res.status(400).json({
      message: "Please enter all the data.",
    });
  }

  const userExist = await User.find({ userEmail: registerEmail });

  if (userExist.length > 0) {
    return res.status(400).json({
      message: "User with this Email already Exist.",
    });
  }

  await User.create({
    userName: registerUserName,
    userEmail: registerEmail,
    userPassword: bcrypt.hashSync(registerPassword, 10),
  });

  res.status(200).json({
    message: "User created successfully.",
  });
};

// login User
exports.userLogin = async (req, res) => {
  const { loginEmail, loginPassword } = req.body;

  if (!loginEmail || !loginPassword) {
    return res.status(400).json({
      message: "Please enter all the data",
    });
  }

  const userExist = await User.find({ userEmail: loginEmail }).select(
    "+userPassword"
  );

  if (userExist.length === 0) {
    return res.status(400).json({
      message: "User with this Email doesn't exist.",
    });
  }

  const isPasswordMatched = bcrypt.compareSync(
    loginPassword,
    userExist[0].userPassword
  );

  if (!isPasswordMatched) {
    return res.status(400).json({
      message: "User Email and password doesn't matched.",
    });
  }

  const loginToken = jwt.sign(
    {
      id: userExist[0]._id,
    },
    process.env.PRIVATE_KEY,
    {
      expiresIn: "10m",
    }
  );

  res.status(200).json({
    message: "Logged in Successfully",
    loginToken,
  });
};

// forgot password -- sending OTP
exports.forgotPassword = async (req, res) => {
  const { forgotEmail } = req.body;

  if (!forgotEmail) {
    return res.status(400).json({
      message: "Please enter the Email.",
    });
  }

  const userExist = await User.find({ userEmail: forgotEmail });

  if (userExist.length === 0) {
    return res.status(400).json({
      message: "Please enter the registered Email.",
    });
  }

  const OTP = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
  });

  sendEmail({
    email: forgotEmail,
    subject: "OTP Todo_MERN_Project",
    message: `Please don't share this with anyone.
    OTP: ${OTP}
    This One Time Password will expire in 10 minutes.`,
  });

  userExist[0].otp = OTP;
  await userExist[0].save();

  res.status(200).json({
    message: "OTP sent successfully.",
  });
};

// verify OTP
exports.verifyOtp = async (req, res) => {
  const { forgotEmail, OTP } = req.body;

  if (!OTP) {
    return res.status(400).json({
      message: "Please enter the OTP you received.",
    });
  }

  const userExist = await User.find({ userEmail: forgotEmail });

  if (userExist.length === 0) {
    return res.status(400).json({
      message: "User with this Email doesn't found.",
    });
  }

  const isOtpMatched = userExist[0].otp === Number(OTP);

  if (!isOtpMatched) {
    return res.status(400).json({
      message: "OTP didn't matched.",
    });
  }

  // disposing OTP
  userExist[0].otp = undefined;
  userExist[0].isOtpVerified = true;
  await userExist[0].save();

  res.status(200).json({
    message: "OTP verified successfully, you can change your password.",
  });
};

// change password
exports.changePassword = async (req, res) => {
  const { forgotEmail, newPassword, confirmNewPassword } = req.body;

  if (!forgotEmail || !newPassword || !confirmNewPassword) {
    return res.status(400).json({
      message: "Please enter all the data.",
    });
  }

  if (newPassword !== confirmNewPassword) {
    return res.status(400).json({
      message: "Please enter the same password both the time.",
    });
  }

  const userExist = await User.find({ userEmail: forgotEmail });

  if (userExist.length === 0) {
    return res.status(400).json({
      message: "User with this Email doesn't exist.",
    });
  }

  if (!userExist[0].isOtpVerified) {
    return res.status(400).json({
      message: "OPT isn't verified yet, please verify it.",
    });
  }

  if (bcrypt.compareSync(confirmNewPassword, userExist[0].userPassword)) {
    return res.status(400).json({
      message: "Please enter a unique password.",
    });
  }

  userExist[0].userPassword = bcrypt.hashSync(confirmNewPassword, 10);
  userExist[0].isOtpVerified = undefined;
  await userExist[0].save();

  res.status(200).json({
    message: "Password changed successfully.",
  });
};
