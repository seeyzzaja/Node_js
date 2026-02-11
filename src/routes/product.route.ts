import { Router } from "express";
import { createProducts, deleteProducts, getAllProducts, getProductById, searchProducts, updateProducts } from "#controllers/product.controller";
import { createProductValidation, getProductByIdValidation, validate } from "#middlewares/product.validation";


const router =Router()

router.get('/product',getAllProducts)
router.get('/product/search',searchProducts)
router.get('/product/:id',validate(getProductByIdValidation),getProductById)
router.post('/product', validate(createProductValidation),createProducts )
router.put('/product/:id', validate(createProductValidation),updateProducts)
router.delete('/product/:id', validate(getProductByIdValidation),deleteProducts)

export default router