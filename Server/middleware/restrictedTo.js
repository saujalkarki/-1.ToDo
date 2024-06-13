function restrictedTo(...role) {
  return (req, res, next) => {
    // if (req.user.role !== role[0]) {
    //   return res.status(400).json({
    //     message: "User with this email is not allowed to create todo.",
    //   });
    // }

    next();
  };
}

module.exports = restrictedTo;
