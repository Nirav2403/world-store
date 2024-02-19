const RequestHandler = (req, res, next) => {
  console.log(`Recevied request: ${req.url}`);
  next();
};

module.exports = RequestHandler;
