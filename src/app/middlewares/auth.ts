import { NextFunction, Request, Response } from "express"
import catchAsync from "../utils/catchAsync"
import AppError from "../errors/AppError"
import httpStatus from "http-status"
import jwt, { decode, JwtPayload } from 'jsonwebtoken'
import config from "../config"
import { User } from "../modules/User/user.model"

const auth = ()=>{
    return catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const token = req.headers.authorization
        if(!token){
            throw new AppError(httpStatus.UNAUTHORIZED,'You are not authorized!')
        }
        const decoded = jwt.verify(token,config.jwt_access_secret as string) as JwtPayload
        const {userId,iat} = decoded
        const user = await User.findById(userId)
        if(!user){
            throw new AppError(httpStatus.NOT_FOUND,'User not found')
        }
        req.user = decoded as JwtPayload
        next()
    })
}


export default auth

