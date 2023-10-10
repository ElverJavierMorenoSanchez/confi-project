import { Router } from "express";
import multer from "multer";
import {
  deleteComputer,
  getComputer,
  getComputers,
  postComputer,
  putComputer,
  postImport,
} from "../../controllers/computer/computer.controller";

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get("/", getComputers);
router.post("/", postComputer);
router.post("/import", upload.single("file"), postImport);
router.get("/:id", getComputer);
router.put("/:id", putComputer);
router.delete("/:id", deleteComputer);

export default router;
