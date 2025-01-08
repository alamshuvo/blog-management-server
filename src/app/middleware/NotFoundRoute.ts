import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const notFoundRoute = (req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.NOT_FOUND).json({
    sucess: false,
    message: 'Api not found',
    StatusCodes:StatusCodes.NOT_FOUND,
    error: '',
  });
};
export default notFoundRoute;
