const express = require("express");
const RequestHandler = require("../middlewares/requestHandler");
const ResponseHandler = require("../middlewares/responseHandler");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const AuthenticationHandler = require("../middlewares/authenticationHandler");

const routes = express.Router();

// middleware
routes.use(RequestHandler);
routes.use("/rest/*", AuthenticationHandler);

// API route paths
routes.use("/auth", authRoutes(routes));
routes.use("/rest/user", userRoutes(routes))
routes.use("/product", productRoutes(routes));

routes.use(ResponseHandler);

module.exports = routes;
