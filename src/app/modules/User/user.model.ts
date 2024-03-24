import mongoose, { model, Schema } from "mongoose";
import bcrypt from 'bcryptjs'
import { TUser, UserModel } from "./user.interface";
import config from "../../config";


const userSchema = new Schema<TUser,UserModel>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
   password:{
    type:String,
    required:true,
    minLength:[6,'password length should be more than or equal 6']
   }
},{timestamps:true})

userSchema.pre('save',async function(next){
    this.password = await bcrypt.hash(this.password,Number(config.bcrypt_salt_round))
    next()
})
userSchema.post('save',function(doc,next){
    doc.password = ''
    next()
})
userSchema.statics.isPasswordMatched = async function(plainTextPassword,hashedPassword){
 return await bcrypt.compare(plainTextPassword,hashedPassword)
}

export const User = model<TUser,UserModel>('User',userSchema)