import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { AuthService } from "./auth.service";


const createUser = catchAsync(async(req,res)=>{
    const payload = req.body;
    const result = await AuthService.createUserIntoDb(payload);
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



const loginUser = catchAsync(async(req,res)=>{
    
    
    const body =req.body;
    const result = await AuthService.loginUser(body)
    const { accessToken } = result;
    sendResponse(res,{
        statusCode:StatusCodes.OK,
        sucess:true,
        message:"Login Sucessfully",
        data:{
            token:accessToken
        }
    })
})




export const authController = {
    createUser,
    loginUser
}