import { pool } from "../../config/db.js";
import "express-async-errors";

const toInt = (value, fallback = 0) => {
    const parsed = parseInt(value, 10);
    return Number.isNaN(parsed) ? fallback : parsed;
};

const cleanText = (value, fallback = "") => {
    if (value === null || value === undefined) {
        return fallback;
    }
    return String(value);
};

export async function createCourse(rawCourse) {
    const title = cleanText(rawCourse?.title).trim();

    if (!title) {
        throw new Error("Título es obligatorio");
    }

    const description = cleanText(rawCourse?.description);
    const duration = toInt(rawCourse?.duration);
    const theme = cleanText(rawCourse?.theme, "basico");
    const price = toInt(rawCourse?.price);

    const [result] = await pool.query(
        "INSERT INTO Course (title, description, duration, theme, price) VALUES (?, ?, ?, ?, ?)",
        [title, description, duration, theme, price]
    );

    return {
        courseId: result.insertId,
        title,
        description,
        duration,
        theme,
        price,
    };
}

export async function getAllCourses() {
    const [rows] = await pool.query(
        "SELECT courseId, title, description, duration, theme, price FROM Course"
    );
    return rows;
}

export async function getCourseById(courseId) {
    const id = toInt(courseId, 0);

    if (!id) {
        return null;
    }

    const [rows] = await pool.query(
        "SELECT courseId, title, description, duration, theme, price FROM Course WHERE courseId = ?",
        [id]
    );

    return rows[0] ?? null;
}

export async function updateCourse(courseId, updates) {
    const id = toInt(courseId, 0);

    if (!id) {
        return null;
    }

    const existing = await getCourseById(id);

    if (!existing) {
        return null;
    }

    const nextValues = {
        title: cleanText(updates?.title ?? existing.title).trim() || existing.title,
        description: cleanText(updates?.description ?? existing.description),
        duration: updates?.duration !== undefined ? toInt(updates.duration, existing.duration) : existing.duration,
        theme: cleanText(updates?.theme ?? existing.theme) || existing.theme,
        price: updates?.price !== undefined ? toInt(updates.price, existing.price) : existing.price,
    };

    await pool.query(
        "UPDATE Course SET title = ?, description = ?, duration = ?, theme = ?, price = ? WHERE courseId = ?",
        [
            nextValues.title,
            nextValues.description,
            nextValues.duration,
            nextValues.theme,
            nextValues.price,
            id,
        ]
    );

    return {
        courseId: existing.courseId,
        ...nextValues,
    };
}

export async function deleteCourse(courseId) {
    const id = toInt(courseId, 0);

    if (!id) {
        return false;
    }

    const [result] = await pool.query("DELETE FROM Course WHERE courseId = ?", [id]);
    return result.affectedRows > 0;
}
