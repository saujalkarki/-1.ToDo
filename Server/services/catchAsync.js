exports.catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      return res.status(500).json({
        messager: err.message,
        fullError: err,
      });
    });
  };
};
