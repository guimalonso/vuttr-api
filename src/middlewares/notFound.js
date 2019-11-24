// Middleware to return error 404 if a given route is not found
module.exports = (req, res, next) => {
  res.status(404).json({
    error: 'Route Not Found',
  });
};
