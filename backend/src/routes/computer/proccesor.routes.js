import { Router } from "express";
import {
  deleteProccesor,
  getProccesor,
  getProccesors,
  postProccesor,
  putProccesor,
} from "../../controllers/computer/proccesor.controller";
const router = Router();

router.get("/", getProccesors);
router.post("/", postProccesor);
router.get("/:id", getProccesor);
router.put("/:id", putProccesor);
router.delete("/:id", deleteProccesor);

export default router;
