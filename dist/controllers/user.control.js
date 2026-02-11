import { asyncHandler } from "#utils/async.handler";
import { successResponse } from "#utils/response";
import { userService } from "#services/user.service";
export const getAllUser = asyncHandler(async (_req, res) => {
    const user = userService.getAll();
    return successResponse(res, 'Daftar user', user);
});
export const getUserById = asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const user = userService.getById(id);
    return successResponse(res, 'user ditemukan', user);
});
export const createUser = asyncHandler(async (req, res) => {
    const user = userService.create(req.body);
    return successResponse(res, 'user berhasil ditambahkan', user, null, 201);
});
export const updateUser = asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const user = userService.update(id, req.body);
    return successResponse(res, 'user berhasil diupdate', user);
});
export const deleteUser = asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const user = userService.delete(id);
    return successResponse(res, 'user berhasil duihapus', user);
});
export const searchUser = asyncHandler(async (req, res) => {
    const { name, max_price } = req.query;
    const user = userService.search(name, max_price ? Number(max_price) : undefined);
    return successResponse(res, 'hasil pencarian', user);
});
//# sourceMappingURL=user.control.js.map