import { ErrorRequestHandler } from 'express';

import { ZodError } from 'zod';
import handleZodError from '../error/handleZodError';
import config from '../config';
import AppError from '../error/AppError';

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
