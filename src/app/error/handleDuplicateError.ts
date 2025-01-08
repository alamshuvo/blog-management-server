import { TGenericErrorResponse } from '../interface/interface';

import { Error } from 'mongoose';

const handleDuplicateError = (
  err: Error & {
    path: string;
    message: string;
  },
): TGenericErrorResponse => {
  return {
    statusCode: 400,
    message: 'Duplicate key  Error',
    err: err,
  };
};

export default handleDuplicateError;
