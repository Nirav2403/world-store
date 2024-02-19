const express = require("express");
const authRoutes = require("./authRoutes");
const RequestHandler = require("../middlewares/requestHandler");
const ResponseHandler = require("../middlewares/responseHandler");

const routes = express.Router();

routes.use(RequestHandler);

routes.use("/auth", authRoutes(routes));

routes.use(ResponseHandler);

module.exports = routes;
