import {
        createCourse,
        getCourseById,
        getAllCourses,
        updateCourse,
        deleteCourse 
    } from '../services/course/courseService.js';
import 'express-async-errors';

const parseId = (value) => {
    const parsed = Number.parseInt(value, 10);
    return Number.isNaN(parsed) ? null : parsed;
};

const sendValidationError = (res, message) => {
    return res.status(400).json({
        success: false,
        message,
    });
};

export const createCourseHandler = async (req, res, next) => {
    try {
        const { title, description, duration, theme, price } = req.body;
        const created = await createCourse({ title, description, duration, theme, price });

        return res.status(201).json({
            success: true,
            message: "Course created successfully",
            data: created,
        });
    } catch (err) {
        if (err.message === "Título es obligatorio") {
            return sendValidationError(res, err.message);
        }
        next(err);
    }
};

export const getCourseHandler = async (req, res, next) => {
    try {
        const id = parseId(req.params.id);
        if (!id) {
            return sendValidationError(res, "Course id is invalid");
        }

        const course = await getCourseById(id);

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Course retrieved successfully",
            data: course,
        });
    } catch (err) {
        next(err);
    }
};

export const updateCourseHandler = async (req, res, next) => {
    try {
        const id = parseId(req.params.id);
        if (!id) {
            return sendValidationError(res, "Course id is invalid");
        }

        const { title, description, duration, theme, price } = req.body;
        const updated = await updateCourse(id, { title, description, duration, theme, price });

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "Course not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Course updated successfully",
            data: updated,
        });
    } catch (err) {
        if (err.message === "Título es obligatorio") {
            return sendValidationError(res, err.message);
        }
        next(err);
    }
};

export const getAllCoursesHandler = async (req, res, next) => {
    try {
        const courses = await getAllCourses();

        return res.status(200).json({
            success: true,
            message: "Courses retrieved successfully",
            data: courses,
        });
    } catch (err) {
        next(err);
    }
};

export const deleteCourseHandler = async (req, res, next) => {
    try {
        const id = parseId(req.params.id);
        if (!id) {
            return sendValidationError(res, "Course id is invalid");
        }

        const deleted = await deleteCourse(id);
        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "Course not found",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Course deleted successfully",
        });
    } catch (err) {
        next(err);
    }
};
