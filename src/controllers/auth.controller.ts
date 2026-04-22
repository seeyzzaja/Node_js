import { asyncHandler } from "#utils/async.handler";
import { AuthService } from "#services/auth.service";
import { type Request,type Response } from "express";
import { successResponse } from "#utils/response";


export const registrer=asyncHandler(async(req:Request,res:Response)=>{
    const user = await AuthService.register(req.body)
    const {password_hash,...userWithoutPassword} =user
    return successResponse(res,"registrasi berhasil",userWithoutPassword,null,201)
})

export const login =asyncHandler(async(req:Request,res:Response)=>{
const result =await AuthService.login(req.body)
return successResponse(res,"login berhasil",result)
})