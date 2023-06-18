import express from "express";
import {
  createSuplier,
  updateSuplier,
  deleteSuplier,
  findAll,
} from "../controllers/suplierController.js";
const router = express.Router();

router.get("/", findAll);
router.post("/", createSuplier);
router.put("/update/:id", updateSuplier);
router.delete("/delete/:id", deleteSuplier);

export default router;
