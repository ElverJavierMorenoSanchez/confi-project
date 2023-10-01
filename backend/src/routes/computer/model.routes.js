import { Router } from "express";
import {
  deleteModel,
  getModel,
  getModels,
  postModel,
  putModel,
} from "../../controllers/computer/model.controller";
const router = Router();

router.get("/", getModels);
router.post("/", postModel);
router.get("/:id", getModel);
router.put("/:id", putModel);
router.delete("/:id", deleteModel);

export default router;
