const mongoose = require("mongoose");

const CustomErrors = (error, next, message, type) => {
  let errorObject = error;

  if (type === "CastError" && error instanceof mongoose.Error.CastError) {
    errorObject.message = message || "Invalid Object Id";
  }

  next(errorObject);
};

module.exports = CustomErrors;
