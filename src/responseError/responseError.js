import createError from "http-errors";

const response = (statusCode, message) => {
  return createError(statusCode, message);
};

export default response;
