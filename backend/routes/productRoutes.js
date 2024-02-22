const productController = require("../controllers/productController");

const productRoutes = (app) => {
  app
    .post("/create", productController.createProduct)
    .get("/:id", productController.getProductById)
    .get("/", productController.getProducts);

  return app;
};

module.exports = productRoutes;
