import { Router } from "express";
import {
  getAvailabilities,
  postAvailability,
  getAvailability,
  putAvailability,
  deleteAvailability,
} from "../../controllers/general/availability.controller";
const router = Router();

router.get("/", getAvailabilities);
router.post("/", postAvailability);
router.get("/:id", getAvailability);
router.put("/:id", putAvailability);
router.delete("/:id", deleteAvailability);

export default router;
