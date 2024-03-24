import { Types } from "mongoose"

export type TBlog = {
    user:Types.ObjectId;
    page?:Types.ObjectId;
    title:string;
    body:string;
    conclusion:string
}