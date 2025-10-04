import {
        createCourse,
        getCourseById,
        getAllCourses,
        updateCourse,
        deleteCourse 
    } from '../services/courseService.js';

export const createCourseHandler = async (req, res, next) => {
    try {
        const { title, description, duration, companyId } = req.body;
        const created = await createCourse({ title, description, duration, companyId });

        return res.status(201).json({
            success: true,
            message: "Course created successfully",
            data: created,
        });
    } catch (err) {
        next(err);
    }
    }



// GET /api/v1/courses/:id - get a course by ID
export const getCourseHandler = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
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

// PUT/PATCH /api/v1/courses/:id - update a course
export const updateCourseHandler = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const { title, description, duration } = req.body;
        const updated = await updateCourse(id, { title, description, duration });

    return res.status(200).json({
        success: true,
        message: "Course updated successfully",
        data: updated,
    });
    } catch (err) {
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


// DELETE /api/v1/courses/:id - delete a course
export const deleteCourseHandler = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
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