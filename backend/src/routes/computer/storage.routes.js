import { Router } from "express";
import {
  deleteStorage,
  getStorage,
  getStorages,
  postStorage,
  putStorage,
} from "../../controllers/computer/storage.controller";
const router = Router();

router.get("/", getStorages);
router.post("/", postStorage);
router.get("/:id", getStorage);
router.put("/:id", putStorage);
router.delete("/:id", deleteStorage);

export default router;
