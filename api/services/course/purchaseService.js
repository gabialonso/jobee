import prisma from "../../config/db.js";
import "express-async-errors";

const toIntOrNull = (value) => {
    if (value === null || value === undefined || value === "") {
        return null;
    }

    const parsed = parseInt(value, 10);
    return Number.isNaN(parsed) ? null : parsed;
};

export const buyCourse = async (userId, courseId, price, currency) => {
    const parsedUserId = toIntOrNull(userId);
    const parsedCourseId = toIntOrNull(courseId);
    const parsedPrice = toIntOrNull(price ?? 0) ?? 0;

    if (!parsedUserId || !parsedCourseId) {
        throw new Error("Invalid purchase payload");
    }

    const course = await prisma.course.findUnique({
        where: { courseId: parsedCourseId },
        select: { courseId: true },
    });
    if (!course) throw new Error("Course not found");

    const existing = await prisma.purchase.findFirst({
        where: { userId: parsedUserId, courseId: parsedCourseId },
        select: { id: true },
    });
    if (existing) throw new Error("Course already purchased by this user");

    const purchase = await prisma.purchase.create({
        data: {
            userId: parsedUserId,
            courseId: parsedCourseId,
            price: parsedPrice,
            currency: currency || "USD",
        },
        select: {
            id: true,
            userId: true,
            courseId: true,
            price: true,
            currency: true,
            course: {
                select: { title: true, description: true, duration: true, theme: true },
            },
        },
    });
    return purchase;
};

export const getUserPurchase = async (userId) => {
    const parsedUserId = toIntOrNull(userId);
    if (!parsedUserId) {
        return [];
    }

    const purchases = await prisma.purchase.findMany({
        where: { userId: parsedUserId },
        orderBy: { id: "desc" },
        select: {
            id: true,
            price: true,
            currency: true,
            course: {
                select: { courseId: true, title: true, description: true, duration: true, theme: true },
            },
        },
    });
    return purchases;
};

export const getAllPurchase = async () => {
    const purchases = await prisma.purchase.findMany({
        orderBy: { id: "desc" },
        select: {
            id: true,
            price: true,
            currency: true,
            user: { select: { id: true, name: true, email: true } },
            course: {
                select: { courseId: true, title: true, description: true, duration: true, theme: true },
            },
        },
    });
    return purchases;
};
