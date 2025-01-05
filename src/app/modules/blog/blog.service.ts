import { TBlog } from "./blog.interface"
import { blogModel } from "./blog.model"

const createBlogsIntoDb =async (payload:TBlog)=> {
  const result = await blogModel.create(payload)
  return result
}

export const blogsService ={
createBlogsIntoDb
}