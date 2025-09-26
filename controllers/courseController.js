const courseService = require("../services/course.service");

// Create course
async function createCourse(req, res) {
    try {
        const { title, description, duration, companyId } = req.body;
        const newCourse = await courseService.createCourse({
        title,
        description,
        duration,
        companyId,
    });
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Get all courses
async function getAllCourses(req, res) {
    try {
        const courses = await courseService.getAllCourses();
        res.json(courses);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get course by ID
async function getCourseById(req, res) {
    try {
        const { courseId } = req.params;
        const course = await courseService.getCourseById(courseId);
        res.json(course);
}catch (error) {
        res.status(404).json({ error: error.message });
    }
}

// Update course
async function updateCourse(req, res) {
    try {
        const { courseId } = req.params;
        const { title, description, duration } = req.body;
        const updatedCourse = await courseService.updateCourse(courseId, {
        title,
        description,
        duration,
    });
        res.json(updatedCourse);
    }catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Delete course
async function deleteCourse(req, res) {
    try {
        const { courseId } = req.params;
        const result = await courseService.deleteCourse(courseId);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
};
