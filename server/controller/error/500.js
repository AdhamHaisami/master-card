const serverError = (error, req, res, next) => {
  if (process.env.NODE_ENV !== 'production') console.log(error);
  res.status(error.status || 500).json({
    message: error.message || 'Internal Server Error',
    statusCode: error.status || 500,
  });
};

module.exports = serverError;
