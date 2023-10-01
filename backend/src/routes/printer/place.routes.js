import { Router } from "express";
import {
  getPlaces,
  postPlace,
  deletePlace,
  getPlace,
  putPlace,
} from "../../controllers/printer/place.controller";
const router = Router();

router.get("/", getPlaces);
router.post("/", postPlace);
router.get("/:id", getPlace);
router.put("/:id", putPlace);
router.delete("/:id", deletePlace);

export default router;
