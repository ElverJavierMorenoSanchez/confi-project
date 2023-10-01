import { Router } from "express";
import {
  getCertificates,
  postCertificate,
  deleteCertificate,
  getCertificate,
} from "../../controllers/computer/certificate.controller";
const router = Router();

router.get("/", getCertificates);
router.post("/", postCertificate);
router.get("/:id", getCertificate);
router.delete("/:id", deleteCertificate);

export default router;
