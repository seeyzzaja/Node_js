import { asyncHandler } from "#utils/async.handler";
import { CategoryService } from "#services/category";
import { successResponse } from "#utils/response";
export const getAll = asyncHandler(async (_req, res) => {
    const categories = await CategoryService.getAll();
    successResponse(res, "Data kategori berhasil diambil", categories, null, 200);
});
export const getById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const category = await CategoryService.getById(Number(id));
    successResponse(res, "Data kategori berhasil diambil", category, null, 200);
});
export const create = asyncHandler(async (req, res) => {
    const { name } = req.body;
    const category = await CategoryService.create({ name });
    successResponse(res, "Data kategori berhasil ditambahkan", category, null, 201);
});
export const update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const category = await CategoryService.update(Number(id), { name });
    successResponse(res, "Data kategori berhasil diupdate", category, null, 200);
});
export const remove = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const category = await CategoryService.delete(Number(id));
    successResponse(res, "Data kategori berhasil dihapus", category, null, 200);
});
export const search = asyncHandler(async (req, res) => {
    const { name } = req.query;
    const categories = await CategoryService.search(name);
    successResponse(res, "Data kategori berhasil dicari", categories, null, 200);
});
//# sourceMappingURL=category.controlers.js.map