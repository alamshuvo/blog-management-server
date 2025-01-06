import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { userService } from "./user.service";

const createUser = catchAsync(async(req,res)=>{
    const payload = req.body;
    const result = await userService.createUserIntoDb(payload);
  sendResponse(res,{
    sucess:true,
    message:'user Register Sucessfully',
    statusCode:StatusCodes.OK,
    data:result
  })
})


export const userController = {
    createUser
}