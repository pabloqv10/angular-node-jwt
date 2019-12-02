exports.verifyToken = (req, res, next) => {
  const token = req.headers;
  console.log('verifyToken middleware');
  return next();
};
