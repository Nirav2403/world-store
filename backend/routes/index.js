const express = require("express");
const RequestHandler = require("../middlewares/requestHandler");
const ResponseHandler = require("../middlewares/responseHandler");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");

const routes = express.Router();

routes.use(RequestHandler);

routes.use("/auth", authRoutes(routes));
routes.use("/rest/user", userRoutes(routes));

routes.use(ResponseHandler);

module.exports = routes;
