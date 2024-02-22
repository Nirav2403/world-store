const CustomErrors = require("../utils/customErrors");

const AuthenticationHandler = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const isAuthenticated = !!token;

    if (!token) {
      throw new Error("You are unauthorized!!");
    }

    next(isAuthenticated);
  } catch (error) {
    CustomErrors(req, res, error, "Unauthorized");
  }
};

module.exports = AuthenticationHandler;
