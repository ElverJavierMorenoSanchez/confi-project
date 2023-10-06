import { Router } from "express";
import {
  deleteModel,
  getModel,
  getModels,
  postModel,
  putModel,
  getModelsByBrand,
} from "../../controllers/general/model.controller";
const router = Router();

router.get("/", getModels);
router.post("/", postModel);
router.get("/:id", getModel);
router.put("/:id", putModel);
router.get("/brand/:id", getModelsByBrand);
router.delete("/:id", deleteModel);

export default router;
