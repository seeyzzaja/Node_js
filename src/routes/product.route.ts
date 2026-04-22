import { createProduct, deleteProduct, getAllProducts, getProductById,  updateProduct } from "#controllers/product.controller";
import { createProductValidation, getProductByIdValidation, updateProductValidation, validate } from "#middlewares/product.validation";
import { upload } from "#middlewares/upload.middlewares";
import { Router } from "express";

const router = Router()
/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Manajemen produk
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Ambil semua daftar produk
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Nomor halaman
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Jumlah data per halaman
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Cari produk berdasarkan nama
 *       - in: query
 *         name: max_price
 *         schema:
 *           type: integer
 *         description: Harga maksimal
 *     responses:
 *       200:
 *         description: Berhasil mengambil data
 */
router.get('/', getAllProducts)
router.get('/:id', validate(getProductByIdValidation), getProductById)
router.post('/',upload.single("image"), validate(createProductValidation), createProduct)
router.put('/:id', validate(updateProductValidation), updateProduct)
router.delete('/:id', validate(getProductByIdValidation), deleteProduct)

export default router