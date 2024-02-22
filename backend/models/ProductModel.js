const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  id: {
    type: Number,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: String,
    require: [true, "Product name nust be required."],
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    require: [true, "Product category nust be required."],
  },
  price: {
    type: Number,
    require: [true, "Product price nust be required."],
  },
  quantity: {
    type: Number,
    require: [true, "Product quantity nust be required."],
  },
});

const Product = mongoose.model("Products", ProductSchema);

module.exports = Product;
