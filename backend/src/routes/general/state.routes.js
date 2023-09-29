import { Router } from "express";
import {
  getStates,
  postState,
  deleteState,
  getState,
  putState,
} from "../../controllers/general/state.controller";
const router = Router();

router.get("/", getStates);
router.post("/", postState);
router.get("/:id", getState);
router.put("/:id", putState);
router.delete("/:id", deleteState);

export default router;
