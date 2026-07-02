import express from "express";
import { createTask, getAllTasks, deleteTask, updateTask, getTaskById } from "../controllers/taskController.js";
import { get } from "mongoose";

const router = express.Router();

//router.post("/add", createTask);
//router.get("/get", getAllTasks);
import authMiddleware from "../middleware/authMiddleware.js";

router.post("/add", authMiddleware, createTask);

router.get("/get", authMiddleware, getAllTasks );

router.get("/:id", authMiddleware, getTaskById);

router.put("/update/:id", authMiddleware, updateTask);
router.delete("/delete/:id", authMiddleware, deleteTask);
//router.delete("/:id", authMiddleware, deleteTask);
//router.put("/:id", updateTask);
//router.delete("/:id", deleteTask);  

export default router;