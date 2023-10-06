import { Router } from "express";
import {
  getBrands,
  postBrand,
  deleteBrand,
  getBrand,
  putBrand,
} from "../../controllers/general/brand.controller";
const router = Router();

router.get("/", getBrands);
router.post("/", postBrand);
router.get("/:id", getBrand);
router.put("/:id", putBrand);
router.delete("/:id", deleteBrand);

export default router;
