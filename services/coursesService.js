// Importa la conexión a la base de datos
const db = require("../config/db");

// Crear curso
async function createCourse(courseData) {
    const { title, description, duration,theme,price,courseId} = courseData;

    if (!title) {
        throw new Error("Título es obligatorios");
    }

const [result] = await db.query(
        "INSERT INTO cursos (title, description, duration, id VALUES (?, ?, ?, ?)",
        [title, description, duration,theme,price,courseId]
    );

return { courseId: result.insertId, ...courseData };
}

// Obtener todos los cursos
async function getAllCourses() {
    const [rows] = await db.query("SELECT * FROM cursos");
    return rows;
}

// Obtener curso por ID
async function getCourseById(id) {
        const [rows] = await db.query("SELECT * FROM cursos WHERE id = ?", [id]);
    if (rows.length === 0) throw new Error("Curso no encontrado");
    return rows[0];
}

// Actualizar curso
async function updateCourse(courseId, updates) {
    const { title, description, duration} = updates;
    await db.query(
        "UPDATE cursos SET title=?, description=?, duration=? WHERE courseId=?",
        [title, description, duration, courseId]
    );
    return getCourseById(courseId);
}

// Eliminar curso
async function deleteCourse(courseId) {
    await db.query("DELETE FROM cursos WHERE courseId = ?", [courseId]);
    return { message: "Curso eliminado" };
}

module.exports = {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
};
