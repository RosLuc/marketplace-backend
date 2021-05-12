const { isCelebrateError } = require('celebrate');

function error (err, req, res, next) {
  if (isCelebrateError(err)) {
      const errorBody = err.details.get('body');
      const { details: [errorDetails] } = errorBody;
      return res.status(400).json({
          message: errorDetails.message,
          key: errorDetails.label
      });
  }
}

module.exports = error;