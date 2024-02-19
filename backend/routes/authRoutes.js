const authController = require("../controllers/authController");

const authRoutes = (app) => {
  app.post("/create", authController.createUser);
  app.post("/login", authController.loginUser);

  return app;
};

module.exports = authRoutes;
