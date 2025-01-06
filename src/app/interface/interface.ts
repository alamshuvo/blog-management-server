import { Error } from 'mongoose';

export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  err: Error;
};
