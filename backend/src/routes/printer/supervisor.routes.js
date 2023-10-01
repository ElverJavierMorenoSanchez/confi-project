import { Router } from "express";
import {
  getSupervisors,
  postSupervisor,
  deleteSupervisor,
  getSupervisor,
  putSupervisor,
} from "../../controllers/printer/supervisor.controller";
const router = Router();

router.get("/", getSupervisors);
router.post("/", postSupervisor);
router.get("/:id", getSupervisor);
router.put("/:id", putSupervisor);
router.delete("/:id", deleteSupervisor);

export default router;
