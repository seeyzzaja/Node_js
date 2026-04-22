import { asyncHandler } from "#utils/async.handler";
import { AuthService } from "#services/auth.service";
import {} from "express";
import { successResponse } from "#utils/response";
export const registrer = asyncHandler(async (req, res) => {
    const user = await AuthService.register(req.body);
    const { password_hash, ...userWithoutPassword } = user;
    return successResponse(res, "registrasi berhasil", userWithoutPassword, null, 201);
});
export const login = asyncHandler(async (req, res) => {
    const result = await AuthService.login(req.body);
    return successResponse(res, "login berhasil", result);
});
//# sourceMappingURL=auth.controller.js.map