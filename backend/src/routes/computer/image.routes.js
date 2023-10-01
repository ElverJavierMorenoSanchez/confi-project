import { Router } from "express";
import {
  getImages,
  postImage,
  deleteImage,
  getImage,
} from "../../controllers/computer/images.controller";
const router = Router();

router.get("/", getImages);
router.post("/", postImage);
router.get("/:id", getImage);
router.delete("/:id", deleteImage);

export default router;
