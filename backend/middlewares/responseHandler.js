const { StatusCodes } = require("http-status-codes");
const customResponse = require("../utils/customResponse");

const ResponseHandler = async (e, req, res, next) => {
  const { sendError, sendSuccess } = customResponse;

  if (e instanceof Error) {
    const statusCode = e.status || StatusCodes.INTERNAL_SERVER_ERROR;
    const errorMessage = e.message || "Internal Server Error";
    const error = {
      status: statusCode,
      message: errorMessage,
      error: e,
    };
    await sendError(req, res, error);
  } else {
    const message = e?.message || "Success";
    const status = e?.status || 200;
    const data = e?.data || {};

    const sendResponse = sendSuccess(res, message, status);
    await sendResponse(data);
  }
};

module.exports = ResponseHandler;
