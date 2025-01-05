
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const notFoundRoute = (req:Request,res:Response,next:NextFunction)=>{
    res.status(StatusCodes.NOT_FOUND).json({
        success:false,
        message:"Api not found",
        error:'',
        stack:'',

    })
}

export default notFoundRoute