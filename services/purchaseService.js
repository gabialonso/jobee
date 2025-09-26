import { PrismaClient } from "@prisma/client";

const courseService = require("./course.service");
const prisma = new PrismaClient();
const db = require("../config/db");

// Buy a course
async function buyCourse(userId, courseId, price, currency) {
    // Check if course exists
    const [course] = await db.query("SELECT * FROM courses WHERE course_id = ?", [courseId]);
    if (course.length === 0) {
        throw new Error("Course not found");
    }

  // Check if already purchased
    const [existing] = await db.query(
        "SELECT * FROM purchases WHERE course_id = ? AND user_id = ?",
        [courseId, userId]
    );
    if (existing.length > 0) {
        throw new Error("Course already purchased by this user");
    }

  // Create purchase
const [result] = await db.query(
        "INSERT INTO purchases (price, currency, course_id, user_id) VALUES (?, ?, ?, ?)",
        [price, currency, courseId, userId]
    );

    return { id: result.insertId, courseId, userId, price, currency };
}

// Get all purchases for a user
async function getUserPurchases(userId) {
const [rows] = await db.query(
        "SELECT p.id, p.price, p.currency, c.title, c.description, c.duration, c.theme " +
        "FROM purchases p INNER JOIN courses c ON p.course_id = c.course_id " +
        "WHERE p.user_id = ?",
        [userId]
    );
return rows;
}

module.exports = {
    buyCourse,
    getUserPurchases,
};
