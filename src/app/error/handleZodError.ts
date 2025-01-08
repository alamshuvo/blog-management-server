import { ZodError } from 'zod';
import { TGenericErrorResponse } from '../interface/interface';

const handleZodError = (err: ZodError): TGenericErrorResponse => {
  //   const errorSources: TErrorHandaler = err.issues.map((issue: ZodIssue) => {
  //     return {
  //       path: issue?.path[issue.path.length - 1],
  //       message: issue?.message,
  //     };
  //   });

  return {
    statusCode: 400,
    message: 'Validation Error',
    err: err,
    //errorSources,
  };
};

export default handleZodError;
