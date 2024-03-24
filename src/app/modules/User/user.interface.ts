import { Model } from "mongoose";

export type TUser = {
    name:string;
    email:string;
    password:string
}


export interface UserModel extends Model<TUser>{
    isPasswordMatched(plainTextPassword:string,hashedPassword:string):Promise<boolean>
}