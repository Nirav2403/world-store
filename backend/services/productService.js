const Product = require("../models/ProductModel");
const APIFeatures = require("../utils/apiFeature");

class ProductService {
  createProduct = (product) => {
    const data = Product.create(product);
    return data;
  };

  getProducts = async (queryString) => {
    const query = Product.find();
    const products = new APIFeatures(query, queryString)
      .paginate()
      .sort()
      .limitFields();
    const data = await products.query;
    return data;
  };

  getProductById = (id) => {
    const data = Product.findById(id);
    return data;
  };
}

module.exports = new ProductService();
