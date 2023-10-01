import { Router } from "express";
import {
  deleteSystem,
  getSystem,
  getSystems,
  postSystem,
  putSystem,
} from "../../controllers/computer/operatingSystem.controller";
const router = Router();

router.get("/", getSystems);
router.post("/", postSystem);
router.get("/:id", getSystem);
router.put("/:id", putSystem);
router.delete("/:id", deleteSystem);

export default router;
