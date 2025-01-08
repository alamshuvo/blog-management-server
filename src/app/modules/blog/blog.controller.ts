import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { blogsService } from './blog.service';
import { blogModel } from './blog.model';
import AppError from '../../error/AppError';
import { userModel } from '../auth/auth.model';

const createBlog = catchAsync(async (req, res) => {
  const author = req?.user?.author;

  const payload = req.body;
  const result = await blogsService.createBlogsIntoDb(payload, author);

  sendResponse(res, {
    sucess: true,
    message: 'Blogs created Sucessfully',
    statusCode: StatusCodes.CREATED,
    data: {
      _id: result?._id,
      title: result?.title,
      content: result?.content,
      author: result?.author,
    },
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const author = req?.user?.author;
  const blogId = req?.params?.id;
  const payload = req?.body;
  const authorOwnBlogFind = await blogModel.findById(blogId);
  const authorOwnBlogFindId = authorOwnBlogFind?.author?.toString();
  const isUserExist = await userModel.findOne({ _id: author });

  if (!isUserExist) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'user is not valid');
  }

  if (authorOwnBlogFindId !== author) {
    throw new AppError(
      StatusCodes.UNAUTHORIZED,
      'you are not authorized for updating blog',
    );
  }
  const result = await blogsService.updateBlogFromDb(blogId, payload);
  sendResponse(res, {
    sucess: true,
    message: 'Blog update Sucessfully',
    statusCode: StatusCodes.OK,
    data: {
      _id: result?._id,
      title: result?.title,
      content: result?.content,
      author: result?.author,
    },
  });
});

//delete blog
const deleteBlog = catchAsync(async (req, res) => {
  const author = req?.user?.author;
  const blogId = req?.params?.id;
  const authorOwnBlogFind = await blogModel.findById(blogId);
  const authorOwnBlogFindId = authorOwnBlogFind?.author?.toString();
  const isUserExist = await userModel.findOne({ _id: author });
  if (!isUserExist) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'user is not valid');
  }
  if (authorOwnBlogFindId !== author) {
    throw new AppError(
      StatusCodes.UNAUTHORIZED,
      'you are not authorized for deleting blog',
    );
  }
  const result = await blogModel.findByIdAndDelete(blogId);
  sendResponse(res, {
    sucess: true,
    message: 'Blog deleted Sucessfully',
    statusCode: StatusCodes.OK,
  });
});

// get blog data
const getALlBlogs = catchAsync(async (req, res) => {
  const result = await blogsService.getAllBlogsFromDb(req.query);
  sendResponse(res, {
    sucess: true,
    message: 'Blog fetched Sucessfully',
    statusCode: StatusCodes.OK,
    data: result.map((blog) => ({
      id: blog._id,
      title: blog.title,
      content: blog.content,
      author: blog.author,
    })),
  });
});

export const blogController = {
  createBlog,
  updateBlog,
  deleteBlog,
  getALlBlogs,
};
