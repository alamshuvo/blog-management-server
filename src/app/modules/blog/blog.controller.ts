import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { blogsService } from './blog.service';

const createBlog = catchAsync(async (req, res) => {
  const author = req?.user?.author;
  
  const payload = req.body;
  const result = await blogsService.createBlogsIntoDb(payload,author);
  console.log(result,"blog tekhe");
  
  sendResponse(res, {
    sucess: true,
    message: 'Blogs created Sucessfully',
    statusCode: StatusCodes.CREATED,
    data: {
      _id:result?._id,
      title:result?.title,
      content:result?.content,
      author:result?.author
    },
  });
});

export const blogController = {
  createBlog,
};
