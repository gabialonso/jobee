// src/controllers/course.controller.js
import {
    createCourse as createCourseService,
    getAllCourses as getAllCoursesService,
    getCourseById as getCourseByIdService,
    updateCourse as updateCourseService,
    deleteCourse as deleteCourseService,
} from "../services/course.service.js";

// POST /api/v1/courses
export const createCourseHandler = async (req, res, next) => {
    try {
        const { title, description, duration, companyId } = req.body;
        const created = await createCourseService({ title, description, duration, companyId });
        res.status(201).json(created);
    } catch (err) {
    next(err);
    }
};

// GET /api/v1/courses
export const listCoursesHandler = async (_req, res, next) => {
    try {
        const courses = await getAllCoursesService();
        res.json(courses);
    } catch (err) {
    next(err);
    }
};

// GET /api/v1/courses/:id
export const getCourseHandler = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const course = await getCourseByIdService(id);
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
        const updated = await updateCourseService(id, { title, description, duration });
        res.json(updated);
    } catch (err) {
    next(err);
    }
};

// DELETE /api/v1/courses/:id
export const deleteCourseHandler = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const deleted = await deleteCourseService(id);
        res.json(deleted);
    } catch (err) {
    next(err);
    }
};
