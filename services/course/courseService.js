import { pool } from "../../config/db.js";
import "express-async-errors";

export async function createCourse(courseData) {
    const { title, description, duration, theme, price, courseId } = courseData;

    if (!title) {
        throw new Error("Título es obligatorio");
    }

    const [result] = await pool.query(
        "INSERT INTO Course (title, description, duration, theme, price, courseId) VALUES (?, ?, ?, ?, ?, ?)",
        [title, description, duration, theme, price, courseId]
    );

    return { courseId: result.insertId, ...courseData };
}

export async function getAllCourses() {
    const [rows] = await pool.query("SELECT * FROM Course");
    return rows;
}

export async function getCourseById(courseId) {
    const [rows] = await pool.query("SELECT * FROM Course WHERE id = ?", [courseId]);
    if (rows.length === 0) throw new Error("Curso no encontrado");
    return rows[0];
}

export async function updateCourse(courseId, updates) {
    const { title, description, duration } = updates;
    await pool.query(
        "UPDATE Course SET title=?, description=?, duration=? WHERE courseId=?",
        [title, description, duration, courseId]
    );
    return getCourseById(courseId);
}

export async function deleteCourse(courseId) {
    await pool.query("DELETE FROM Course WHERE courseId = ?", [courseId]);
    return { message: "Curso eliminado" };
}
