// src/routes/course.routes.js
import { Router } from "express";
import {
    createCourseHandler,
    getCourseHandler,
    listCoursesHandler,
    updateCourseHandler,
    deleteCourseHandler,
} from "../src/controllers/course.controller.js";

const router = Router();

router.post("/", createCourseHandler);
router.get("/:id", getCourseHandler);
router.get("/", listCoursesHandler);
router.put("/:id", updateCourseHandler);
router.delete("/:id", deleteCourseHandler);

export default router;
