import express from "express";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  findAll,
} from "../controllers/productController.js";
const router = express.Router();

router.get("/", findAll);
router.post("/", createProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

export default router;
