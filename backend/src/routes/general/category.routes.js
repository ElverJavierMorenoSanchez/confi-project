import { Router } from "express";
import {
  getCategories,
  postcategory,
  deleteCategory,
  getCategory,
  putCategory,
} from "../../controllers/general/category.controller";
const router = Router();

router.get("/", getCategories);
router.post("/", postcategory);
router.get("/:id", getCategory);
router.put("/:id", putCategory);
router.delete("/:id", deleteCategory);

export default router;
