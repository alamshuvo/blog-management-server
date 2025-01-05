import { Types } from "mongoose";

export type TBlog= {
	title:String,
    content:String,
    author: Types.ObjectId,
   isPublished?:boolean,

}