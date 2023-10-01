import { Router } from "express";
import {
  deleteRam,
  getRam,
  getRams,
  postRam,
  putRam,
} from "../../controllers/computer/ram.controller";
const router = Router();

router.get("/", getRams);
router.post("/", postRam);
router.get("/:id", getRam);
router.put("/:id", putRam);
router.delete("/:id", deleteRam);

export default router;
