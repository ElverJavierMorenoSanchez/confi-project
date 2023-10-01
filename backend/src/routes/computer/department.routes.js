import { Router } from "express";
import {
  getDepartments,
  postDepartment,
  deleteDepartment,
  getDepartment,
  putDepartment,
} from "../../controllers/computer/department.controller";
const router = Router();

router.get("/", getDepartments);
router.post("/", postDepartment);
router.get("/:id", getDepartment);
router.put("/:id", putDepartment);
router.delete("/:id", deleteDepartment);

export default router;
