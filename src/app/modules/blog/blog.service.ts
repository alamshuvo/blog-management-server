import { TLoginUser } from '../auth/auth.interface';
import { TBlog } from './blog.interface';
import { blogModel } from './blog.model';

const createBlogsIntoDb = async (payload: TBlog,author:string) => {
  console.log(author);
  
  const result = (await blogModel.create({...payload,author})).populate('user')
  return result;
};

export const blogsService = {
  createBlogsIntoDb,
};
