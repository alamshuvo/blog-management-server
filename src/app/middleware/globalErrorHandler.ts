import { ErrorRequestHandler } from 'express';

import { ZodError } from 'zod';
import handleZodError from '../error/handleZodError';
import config from '../config';
import AppError from '../error/AppError';
import handleValidationError from '../error/handleValidationError';
import handleCastError from '../error/handleCastError';
import handleDuplicateError from '../error/handleDuplicateError';
import handleInternalServerError from '../error/handleInternalServerError';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCodes = err.StatusCode || 400;
  let message = err.message || 'something Went Wrong';
  let error = err || 'some error here';

  if (err instanceof ZodError) {
    const simpliFiedError = handleZodError(err);
    statusCodes = simpliFiedError?.statusCode;
    message = simpliFiedError?.message;
    error = simpliFiedError?.err;
  } else if (err instanceof AppError) {
    statusCodes = err?.statusCode;
    message = err?.message;
    error = err;
  } else if (err?.name === 'ValidationError') {
    const simpliFiedError = handleValidationError(err);
    statusCodes = simpliFiedError?.statusCode;
    message = simpliFiedError?.message;
    error = simpliFiedError?.message;
  } else if (err?.name === 'castError') {
    const simpliFiedError = handleCastError(err);
    statusCodes = simpliFiedError?.statusCode;
    message = simpliFiedError?.message;
    error = simpliFiedError?.err;
  } else if (err?.code === 11000) {
    const simpliFiedError = handleDuplicateError(err);
    statusCodes = simpliFiedError?.statusCode;
    message = simpliFiedError?.message;
    error = simpliFiedError?.err;
  }
  else if (err?.code === 500){
    const simpliFiedError = handleInternalServerError(err)
    statusCodes = simpliFiedError?.statusCode;
    message = simpliFiedError?.message;
    error = simpliFiedError?.err;
  }

  res.status(statusCodes).json({
    success: false,
    message,
    statusCodes,
    error,
    stack: config.node_env === 'development' ? err?.stack : null,
  });
};

export default globalErrorHandler;
