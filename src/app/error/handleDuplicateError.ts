import { TGenericErrorResponse } from '../interface/interface';

import { Error } from 'mongoose';

const handleDuplicateError = (err: Error & {
  path: any;
  message: any;
}): TGenericErrorResponse => {
  const match = err.message.match(/"([^"]*)"/);
  const extractedValue = match && match[1];

  return {
    statusCode: 400,
    message: 'Duplicate key Error Error',
    err: err,
  };
};

export default handleDuplicateError;
