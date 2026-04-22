import { ProductService } from "#services/product.service";
import { asyncHandler } from "#utils/async.handler";
import { errorResponse, successResponse } from "#utils/response";
export const getAllProducts = asyncHandler(async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = req.query.search;
    const sortBy = req.query.sortBy;
    const sortOrder = req.query.sortOrder || 'desc';
    const result = await ProductService.getAll({
        page,
        limit,
        search,
        sortBy,
        sortOrder
    });
    const pagination = {
        page: result.currentPage,
        limit: limit,
        total: result.totalItems
    };
    return successResponse(res, 'Daftar produk berhasil di ambil', result.products, pagination);
});
export const getProductById = asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const product = await ProductService.getById(id);
    return successResponse(res, "Produk ditemukan", product);
});
export const createProduct = asyncHandler(async (req, res) => {
    const file = req.file;
    if (!file)
        return errorResponse(res, "Gambar produk wajib di isi", 400);
    const imageUrl = `public/uploads/${file.filename}`;
    const productData = {
        ...req.body,
        price: Number(req.body.price),
        stock: Number(req.body.stock),
        category_id: Number(req.body.category_id),
        image: imageUrl
    };
    const product = await ProductService.create(productData);
    return successResponse(res, "produk berhasil di tambahkan", product, null, 201);
});
export const updateProduct = asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const product = await ProductService.update(id, req.body);
    return successResponse(res, "Produk berhasil diperbarui", product);
});
export const deleteProduct = asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const product = await ProductService.delete(id);
    return successResponse(res, "Produk berhasil dihapus", product);
});
// export const searchProducts = asyncHandler(async (req: Request, res: Response) => {
//     const { name, max_price } = req.query
//     const products = await ProductService.search(
//         name as string,
//         max_price ? Number(max_price) : undefined
//     )
//     return successResponse(res, "Hasil pencarian", products)
// })
//# sourceMappingURL=product.controller.js.map