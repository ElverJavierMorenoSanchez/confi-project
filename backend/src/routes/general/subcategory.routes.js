import { Router } from "express";
import {
  getSubcategories,
  postSubcategory,
  deleteSubcategory,
  getSubcategory,
  putSubcategory,
} from "../../controllers/general/subcategory.controller";
const router = Router();

router.get("/", getSubcategories);
router.post("/", postSubcategory);
router.get("/:id", getSubcategory);
router.put("/:id", putSubcategory);
router.delete("/:id", deleteSubcategory);

export default router;
