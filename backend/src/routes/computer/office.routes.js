import { Router } from "express";
import {
  deleteOffice,
  getOffice,
  getOffices,
  postOffice,
  putOffice,
} from "../../controllers/computer/office.controller";
const router = Router();

router.get("/", getOffices);
router.post("/", postOffice);
router.get("/:id", getOffice);
router.put("/:id", putOffice);
router.delete("/:id", deleteOffice);

export default router;
