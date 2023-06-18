import express from "express";
import {
  createUser,
  updateUser,
  findAll,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

/* GET users listing. */
router.post("/", createUser);
router.get("/", findAll);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;
