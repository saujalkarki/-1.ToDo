const validateMiddleware = (schema) => {
  return async (req, res, next) => {
    try {
      const parsedBody = await schema.parseAsync(req.body);
      req.body = parsedBody;
      next();
    } catch (err) {
      res.status(400).json({
        message: err.errors[0].message,
      });
    }
  };
};

module.exports = validateMiddleware;
