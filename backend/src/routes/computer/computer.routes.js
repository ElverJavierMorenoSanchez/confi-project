import { Router } from "express";
import {
  deleteComputer,
  getComputer,
  getComputers,
  postComputer,
  putComputer,
} from "../../controllers/computer/computer.controller";
const router = Router();

router.get("/", getComputers);
router.post("/", postComputer);
router.get("/:id", getComputer);
router.put("/:id", putComputer);
router.delete("/:id", deleteComputer);

export default router;
