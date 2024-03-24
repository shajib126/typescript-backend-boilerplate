import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.services";

const signUpUser = catchAsync(async(req,res)=>{
    const result = await UserServices.signUpUserIntoDB(req.body)
    sendResponse(res,{
        statusCode:httpStatus.CREATED,
        success:true,
        message:'Signed Up successfully',
        data:result
    })
})

const loginUser = catchAsync(async(req,res)=>{
    const result = await UserServices.loginUserFromDB(req.body)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Logged In successfully',
        data:result
    })
})

const userProfile = catchAsync(async(req,res)=>{
    const result = await UserServices.userProfileFromDB(req.user.userId)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'User profile retrieve successfully',
        data:result
    })
})

export const UserController = {
    signUpUser,
    loginUser,
    userProfile
}