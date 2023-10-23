import express from "express";
import blogsController from "../controllers/blogsController.js";

const router = express.Router();

router.post("/", blogsController.create);
router.get("/", blogsController.getAll);
router.get("/:id", blogsController.getById);
export default router;