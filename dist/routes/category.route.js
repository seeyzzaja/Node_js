import { Router } from "express";
import { getAll, getById, create, update, remove, search } from "#controllers/category.controlers";
import { validate } from "#middlewares/product.validation";
import { createCategoryValidation } from "#middlewares/category.validation";
const router = Router();
router.get("/", getAll);
router.get("/search", search);
router.get("/:id", getById);
router.post("/", validate(createCategoryValidation), create);
router.put("/:id", validate(createCategoryValidation), update);
router.delete("/:id", remove);
export default router;
//# sourceMappingURL=category.route.js.map