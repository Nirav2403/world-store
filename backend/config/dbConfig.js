const mongoose = require("mongoose");
const config = require("./appConfig");

const connectDB = async () => {
  await mongoose
    .connect(config.db.url)
    .then((res) => console.log("Database connected successfully"))
    .catch((error) => {
      console.error("Database not connected, something went wrong!!");
      console.error(error);
    });
};

module.exports = connectDB;
