import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../../utils/catchAsync";
import AppError from "../../error/AppError";
import { userModel } from "../auth/auth.model";
import { userService } from "./user.service";
import sendResponse from "../../../utils/sendResponse";



const updateUser = catchAsync(async(req,res)=>{
  const user = req?.user?.author;
  const userId = req?.params?.userId;
  const userData = await userModel.findById(userId);
  
  
  if (!userData) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
  }
  if (userData.isBlocked) {
    throw new AppError(StatusCodes.FORBIDDEN,"user is blocked already")
  }
 
  const result = await userService.updateBlockUser(userId, userData);
  sendResponse(res, {
    sucess: true,
    message: 'User blocked Sucessfully',
    statusCode: StatusCodes.OK,
  });
  
})

export const userController = {
 updateUser
};
