import { Router } from "express";
import {
  getPrinters,
  postPrinter,
  deletePrinter,
  getPrinter,
  putPrinter,
} from "../../controllers/printer/printer.controller";
const router = Router();

router.get("/", getPrinters);
router.post("/", postPrinter);
router.get("/:id", getPrinter);
router.put("/:id", putPrinter);
router.delete("/:id", deletePrinter);

export default router;
