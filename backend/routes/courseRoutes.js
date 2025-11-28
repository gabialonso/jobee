import { Router } from "express";
import {
    createCourseHandler,
    getCourseHandler,
    getAllCoursesHandler,
    updateCourseHandler,
    deleteCourseHandler,
} from "../controllers/courseController.js";

const router = Router();

router.post("/", createCourseHandler);
router.get("/:id", getCourseHandler);
router.get("/", getAllCoursesHandler);
router.put("/:id", updateCourseHandler);
router.delete("/:id", deleteCourseHandler);

export default router;
