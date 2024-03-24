import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.services";

const createBlog = catchAsync(async(req,res)=>{
    const result = await BlogServices.createBlogIntoDB(req.body) // userId should be passed
    sendResponse(res,{
        statusCode:httpStatus.CREATED,
        success:true,
        message:'Blog created successfully',
        data:result
    })
})

const allBlog = catchAsync(async(req,res)=>{
    const result = await BlogServices.AllblogsFromDB() //query can be passed
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Blogs retrieve successfully',
        data:result
    })
})


export const BlogController = {
    createBlog,
    allBlog
}