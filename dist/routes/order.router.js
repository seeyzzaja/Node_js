import { checkout, getDetail } from "#controllers/order.controlers";
import { authenticate } from "#middlewares/auth.middlewares";
import { Router } from "express";
const router = Router();
router.post("/checkout", authenticate, checkout);
router.get("/:id", authenticate, getDetail);
export default router;
//# sourceMappingURL=order.router.js.map