import prisma from "../config/db.js";

export const buyCourseHandler = async (userId, courseId, price, currency) => {
    const course = await prisma.course.findUnique({
        where: { courseId },
        select: { courseId: true },
    });
    if (!course) throw new Error("Course not found");

    const existing = await prisma.purchase.findFirst({
        where: { userId, courseId },
        select: { id: true },
    });
    if (existing) throw new Error("Course already purchased by this user");

    const purchase = await prisma.purchase.create({
        data: { userId, courseId, price, currency },
            select: {
                id: true,
                userId: true,
                courseId: true,
                price: true,
                course: {
                    select: { title: true, description: true, duration: true, theme: true },
                },
            },
    });
    return purchase;
};

export const getUserPurchasesHandler = async (userId) => {
    const purchases = await prisma.purchase.findMany({
        where: { userId },
        orderBy: { id: "desc" },
        select: {
        id: true,
        price: true,
        currency: true,
        course: {
                select: { title: true, description: true, duration: true, theme: true },
            },
        },
    });
    return purchases;
};

export const getAllPurchasesHandler = async () => {
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
