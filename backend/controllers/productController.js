const productService = require("../services/productService");
const CustomErrors = require("../utils/customErrors");

class ProductController {
  createProduct = async (req, res, next) => {
    try {
      const data = req.data;
      const products = await productService.createProduct(data);

      const resp = {
        data: products,
      };

      next(resp);
    } catch (error) {
      next(error);
    }
  };

  getProductById = async (req, res, next) => {
    try {
      const productId = req.params.id;
      const product = await productService.getProductById(productId);

      const resp = {
        data: product,
      };

      next(resp);
    } catch (error) {
      error.message = "Invalid product Id";
      CustomErrors(req, res, error, "CastError");
    }
  };

  getProducts = async (req, res, next) => {
    try {
      const query = req.query;
      const products = await productService.getProducts(query);

      const resp = {
        data: products,
      };

      next(resp);
    } catch (error) {
      console.error(error);
    }
  };
}

module.exports = new ProductController();
