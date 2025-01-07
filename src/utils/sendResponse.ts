import { Response } from 'express';
const sendResponse = <T>(
  res: Response,
  data: { statusCode: number; sucess: boolean; message?: string; data?: T },
) => {
  res.status(data?.statusCode).json({
    sucess: data?.sucess,
    message: data?.message,
    statusCode: data.statusCode,
    data: data?.data,
  });
};
export default sendResponse;
