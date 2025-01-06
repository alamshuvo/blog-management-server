import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { Trole } from "../modules/auth/auth.interface";
import AppError from "../error/AppError";
import { StatusCodes } from "http-status-codes";
import Jwt, { JwtPayload } from 'jsonwebtoken'
import config from "../config";
import { userModel } from "../modules/auth/auth.model";

 const auth =(...requiredRole : Trole[])=> {
  return catchAsync(async (req:Request,res:Response,next:NextFunction)=>{
    const token  = req.headers.authorization;
    console.log(token);
    if (!token) {
      throw new AppError(StatusCodes.UNAUTHORIZED,"you are not authorized")
    }
    Jwt.verify(token,(config.jwt_access_token as string),async function(err,decode){
      if (err) {
        throw new AppError(StatusCodes.UNAUTHORIZED,"you are not authorized")
      }
      const {email,role,author}= decode as JwtPayload;

      // checking the user is exist 
      const user = await userModel.findOne({email:email})
      console.log(user);
      
      if (!user) {
        throw new AppError(StatusCodes.UNAUTHORIZED,"This user is not found !!")
      }
      const isblocked = user?.isBlocked
      if (isblocked) {
        throw new AppError(StatusCodes.UNAUTHORIZED,"This user is blocked")
      }



    if (requiredRole && !requiredRole.includes(role)) {
      throw new AppError(StatusCodes.UNAUTHORIZED,"you are not authorized")
    }
   req.user =decode as JwtPayload
    
     next() 
    })
    
  })
 }

 export default auth