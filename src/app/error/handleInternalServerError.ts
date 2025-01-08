import { TGenericErrorResponse } from '../interface/interface';

interface ICustomError extends Error {
  path?: string;
  message: string;
}

const handleInternalServerError = (err: ICustomError): TGenericErrorResponse => {
  return {
    statusCode: 500, // Correct status code for internal server errors
    message: err.message || 'Internal Server Error',
    err: {
      name: err.name,
      message: err.message,
    },
  };
};

export default handleInternalServerError;