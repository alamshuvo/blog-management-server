import mongoose from 'mongoose';
import { TGenericErrorResponse } from '../interface/interface';

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericErrorResponse => {
  return {
    statusCode: 400,
    message: 'Validation Error',
    err: err,
  };
};

export default handleValidationError;
