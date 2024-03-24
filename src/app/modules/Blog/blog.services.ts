import { TBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const createBlogIntoDB = async(payload:TBlog)=>{
    const blog = (await Blog.create(payload)).populate('user page')
    return blog
}

const AllblogsFromDB = async()=>{
    const blogs = await Blog.find()
    return blogs
}

const editBlogIntoDB = async(userId:string,blogid:string,payload:Partial<TBlog>)=>{

}
const deleteBlogFromDB = async(id:string)=>{
    const blog = await Blog.findByIdAndDelete(id)
    return blog
}

export const BlogServices = {
    createBlogIntoDB,
    AllblogsFromDB,
    editBlogIntoDB,
    deleteBlogFromDB
}