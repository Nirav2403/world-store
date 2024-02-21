const jwt = require("jsonwebtoken");
const config = require("../config/appConfig");

const generateToken = (payload) => {
  return jwt.sign({ payload }, config.auth.jwt_secret, {
    expiresIn: config.auth.jwt_expiresin,
    algorithm: "HS512",
  });
};

const compareToken = (token, originToken) => {
  const decodedToken = jwt.decode(token);
  const decodedOriginToken = jwt.decode(originToken);
  return JSON.stringify(decodedToken) === JSON.stringify(decodedOriginToken);
};

module.exports = {
  generateToken,
  compareToken,
};
