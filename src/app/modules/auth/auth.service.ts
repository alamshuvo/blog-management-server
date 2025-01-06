import { StatusCodes } from "http-status-codes";
import AppError from "../../error/AppError";

import { createToken } from "./auth.utils";
import config from "../../config";
import { TLoginUser, TUser } from "./auth.interface";
import { userModel } from "./auth.model";



const createUserIntoDb =async (payload:TUser)=>{
    const result = await userModel.create(payload)
    return result
  }
  



const loginUser = async (payload:TLoginUser)=>{
    const userExist = await userModel.findOne({ email: payload?.email });
    console.log(userExist,payload?.email);
    if (!userExist) {
        throw new AppError(StatusCodes.UNAUTHORIZED,"Invalid Credentials")
    }

    const isUserBlocked = userExist?.isBlocked;
    if (isUserBlocked) {
        throw new AppError(StatusCodes.BAD_REQUEST,"User is blocked")
    }

    const isPasswordMatched = await userModel.isPasswordMatched(
        payload?.password,
        userExist?.password,
    )
    if (!isPasswordMatched) {
        throw new AppError(StatusCodes.BAD_REQUEST,"Password dont matched")
    }
    
    
    const jwtPayload = {
        role:userExist?.role,
        email:userExist?.email,
        author:userExist?._id
    }
    const accessToken =  createToken(jwtPayload,config.jwt_access_token as string,config.jwt_Expires_in as string)
    return {
        accessToken
    }
}

export const AuthService = {
    createUserIntoDb,
    loginUser
}