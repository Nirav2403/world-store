const userController = require("../controllers/userController");

const userRoutes = (app) => {
  app
    .get("/", userController.getUsers)
    .get("/profile", userController.getUserProfile)
    .get("/:id", userController.getUserById);

  return app;
};

module.exports = userRoutes;
