import mongoose from 'mongoose';
import { TGenericErrorResponse } from '../interface/interface';

const handleCastError = (
  err: mongoose.Error.CastError,
): TGenericErrorResponse => {
  return {
    statusCode: 400,
    message: 'invalid Id',
    err: err,
  };
};

export default handleCastError;
