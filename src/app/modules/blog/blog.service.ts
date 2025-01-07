import QueryBuilder from '../../builder/QuearyBuilder';
import { searchableFeilds } from './blog.const';
import { TBlog } from './blog.interface';
import { blogModel } from './blog.model';

const createBlogsIntoDb = async (payload: TBlog, author: string) => {
  console.log(author, 'blog Service tekhe');

  const result = await (
    await blogModel.create({ ...payload, author })
  ).populate('author');
  return result;
};

const updateBlogFromDb = async (id: string, payload: TBlog) => {
  const result = await blogModel
    .findByIdAndUpdate({ _id: id }, payload, {
      new: true,
      runValidators: true,
    })
    .populate('author');
  return result;
};

//get all blogs
const getAllBlogsFromDb = async (query: Record<string, unknown>) => {
  const blogQueary = new QueryBuilder(
    blogModel.find().populate('author'),
    query,
  )
    .search(searchableFeilds)
    .filter()
    .sort();
  const result = await blogQueary.modelQuery;
  return result;
};
export const blogsService = {
  createBlogsIntoDb,
  updateBlogFromDb,
  getAllBlogsFromDb,
};
