//we need to handle our errors... it'll make things easier during dev
function errorHandler(error, request, response, next){
  return response.status(error.status || 500).json({
    error: {
      message: error.message || "Uh oh, something went wrong..."
    }
  });
}

module.exports = errorHandler;
