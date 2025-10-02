// src/controllers/course.controller.js
import {
    createCourse,
    getAllCourses ,
    getCourseById ,
    updateCourse ,
    deleteCourse ,
} from "../src/services/course.service.js";

// POST /api/v1/courses
export const createCourseHandler = async (req, res, next) => {
    try {
        const { title, description, duration, companyId } = req.body;
        const created = await createCourse({ title, description, duration, companyId });
        res.status(201).json(created);
    } catch (err) {
    next(err);
    }
};

// GET /api/v1/courses
export const listCoursesHandler = async (_req, res, next) => {
    try {
        const courses = await getAllCourses();
        res.json(courses);
    } catch (err) {
    next(err);
    }
};

// GET /api/v1/courses/:id
export const getCourseHandler = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const course = await getCourseById(id);
        if (!course) return res.status(404).json({ error: "Course not found" });
        res.json(course);
    } catch (err) {
    next(err);
    }
};

// PUT/PATCH /api/v1/courses/:id
export const updateCourseHandler = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const { title, description, duration } = req.body;
        const updated = await updateCourse(id, { title, description, duration });
        res.json(updated);
    } catch (err) {
    next(err);
    }
};

// DELETE /api/v1/courses/:id
export const deleteCourseHandler = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const deleted = await deleteCourse(id);
        res.json(deleted);
    } catch (err) {
    next(err);
    }
};
