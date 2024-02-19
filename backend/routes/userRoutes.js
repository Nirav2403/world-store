const userController = require("../controllers/userController");

const userRoutes = (app) => {
  app.get("/users", userController.getUserList);

  return app;
};

module.exports = userRoutes;
