import * as courseService from "../services/cursesService.js";

const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course.controller");

// Routes for courses
router.post("/", courseController.createCourse);              // Create course
router.get("/", courseController.getAllCourses);             // Get all courses
router.get("/:courseId", courseController.getCourseById);   // Get course by ID
router.put("/:courseId", courseController.updateCourse);    // Update course
router.delete("/:courseId", courseController.deleteCourse); // Delete course

module.exports = router;
