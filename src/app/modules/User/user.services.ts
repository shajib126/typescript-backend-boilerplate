import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { createToken } from "./user.utils";
import config from "../../config";

const signUpUserIntoDB = async(payload:TUser)=>{
    const user = await User.create(payload)
    return user
}

const loginUserFromDB = async(payload:Partial<TUser>)=>{
    const {email,password} = payload
    const user = await User.findOne({email})
    if(!user){
        throw new AppError(404,'User not found')
    }
    if(!(await User.isPasswordMatched(password as string,user?.password))){
        throw new AppError(httpStatus.FORBIDDEN,'wrong password!')
    }
    const jwtPayload = {
        userId:user.id
    }

    const accessToken = createToken(jwtPayload,config.jwt_access_secret as string,config.jwt_access_expire_in as string)

    const refreshToken = createToken(jwtPayload,config.jwt_refresh_secret as string,config.jwt_refresh_expire_in as string)

    return {
        accessToken,
        refreshToken
    }
    
}

const userProfileFromDB = async(id:string)=>{
    const user = await User.findById(id).select('-password')
    if(!user){
        throw new AppError(httpStatus.NOT_FOUND,'User not found')
    }
    return user
}

export const UserServices = {
    signUpUserIntoDB,
    loginUserFromDB,
    userProfileFromDB
}