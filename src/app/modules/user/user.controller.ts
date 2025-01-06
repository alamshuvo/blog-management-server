import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { userService } from "./user.service";

const createUser = catchAsync(async(req,res)=>{
    const payload = req.body;
    const result = await userService.createUserIntoDb(payload);
  sendResponse(res,{
    sucess:true,
    message:'User registered successflly',
    statusCode:StatusCodes.CREATED,
    data:{
      _id:result._id,
      name:result.name,
      email:result.email
    }
  })
})


export const userController = {
    createUser
}