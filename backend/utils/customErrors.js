const mongoose = require("mongoose");
const customResponse = require("./customResponse");

const CustomErrors = async (req, res, error, ...rest) => {
  let errorObject = { ...error };

  if (rest.includes("CastError") && error instanceof mongoose.Error.CastError) {
    errorObject.message = errorObject.message || "Invalid Object Id";
  }

  if (rest.includes("Unauthorized")) {
    errorObject.status = 401;
    errorObject.message = errorObject.message || "You are unauthorized!!";
  }

  await customResponse.sendError(req, res, errorObject);
};

module.exports = CustomErrors;
