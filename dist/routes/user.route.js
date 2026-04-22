import { destroy, index, show, store, update } from "#controllers/user.control";
import { authenticate } from "#middlewares/auth.middlewares";
import { Router } from "express";
const router = Router();
router.get("/", authenticate, index);
router.get("/:id", authenticate, show);
router.post("/", authenticate, store);
router.put("/:id", authenticate, update);
router.delete("/:id", authenticate, destroy);
export default router;
//# sourceMappingURL=user.route.js.map