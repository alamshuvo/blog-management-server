import { TLoginUser } from '../auth/auth.interface';
import { TBlog } from './blog.interface';
import { blogModel } from './blog.model';

const createBlogsIntoDb = async (payload: TBlog, author: string) => {
  console.log(author,"blog Service tekhe");

  const result = await blogModel.create({ ...payload, author });
  return result;
};

const updateBlogFromDb = async (id: string, payload: TBlog) => {
  const result = await blogModel.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
export const blogsService = {
  createBlogsIntoDb,
  updateBlogFromDb,
};
