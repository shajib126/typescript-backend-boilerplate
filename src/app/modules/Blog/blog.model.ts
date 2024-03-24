
import { model, Schema } from 'mongoose'
import { TBlog } from './blog.interface'

const blogSchema =new Schema<TBlog>({
    user:{
        type:Schema.Types.ObjectId,
        required:true
    },
    page:{
        type:Schema.Types.ObjectId
    },
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    conclusion:{
        type:String
    }
},{timestamps:true})


export const Blog = model<TBlog>('Blog',blogSchema)