import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { blogsService } from "./blog.service";

const createBlog = catchAsync(async (req,res)=>{
    const payload=req.body;
    const result = await blogsService.createBlogsIntoDb(payload)
    sendResponse(res,{
        sucess:true,
        message:'Blogs created Sucessfully',
        statusCode:StatusCodes.OK,
        data:result
    })
})


export const blogController ={
    createBlog
}