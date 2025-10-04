// Importa la conexión a la base de datos
import db from "../config/db.js";
import "express-async-errors";

// Crear curso
export async function createCourse(courseData) {
    const { title, description, duration, theme, price, courseId } = courseData;

    if (!title) {
        throw new Error("Título es obligatorio");
    }

    const [result] = await db.query(
        "INSERT INTO cursos (title, description, duration, theme, price, courseId) VALUES (?, ?, ?, ?, ?, ?)",
        [title, description, duration, theme, price, courseId]
    );

    return { courseId: result.insertId, ...courseData };
}

export async function getAllCourses() {
    const [rows] = await db.query("SELECT * FROM cursos");
    return rows;
}

export async function getCourseById(courseId) {
    const [rows] = await db.query("SELECT * FROM cursos WHERE id = ?", [courseId]);
    if (rows.length === 0) throw new Error("Curso no encontrado");
    return rows[0];
}

export async function updateCourse(courseId, updates) {
    const { title, description, duration } = updates;
    await db.query(
        "UPDATE cursos SET title=?, description=?, duration=? WHERE courseId=?",
        [title, description, duration, courseId]
    );
    return getCourseById(courseId);
}

export async function deleteCourse(courseId) {
    await db.query("DELETE FROM cursos WHERE courseId = ?", [courseId]);
    return { message: "Curso eliminado" };
}
