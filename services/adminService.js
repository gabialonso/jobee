// src/services/admin.service.js
import prisma from "../config/db.js";

export const adminCreateCourse = async (courseData) => {
    return prisma.course.create({ data: courseData });
};

export const adminListUsers = async (type) => {
    if (type === "person") {
            return prisma.user.findMany({
            where: { persons: { some: {} } },
            orderBy: { id: "asc" },
        });
    }
    if (type === "company") {
            return prisma.user.findMany({
            where: { companies: { some: {} } },
            orderBy: { id: "asc" },
        });
    }
    return prisma.user.findMany({ orderBy: { id: "asc" } });
};

export const adminPersonsTable = async () => {
    return prisma.person.findMany({ orderBy: { id: "asc" } });
};

export const adminCompaniesTable = async () => {
    return prisma.company.findMany({ orderBy: { id: "asc" } });
};

export const adminCoursesTable = async () => {
    return prisma.course.findMany({ orderBy: { courseId: "asc" } });
};

export const adminListPurchases = async () => {
    return prisma.purchase.findMany({ orderBy: { id: "desc" } });
};

export const adminPurchasesTable = async () => {
    const rows = await prisma.purchase.findMany({ orderBy: { id: "desc" } });
    return rows.map((p) => ({
        purchaseId: p.id,
        profileId: p.userId,
        userId: p.userId,
        courseId: p.courseId,
        price: p.price,
        currency: p.currency,
    }));
};

export const adminCoursesWithPurchaseCount = async () => {
    const counts = await prisma.purchase.groupBy({
        by: ["courseId"],
        _count: { _all: true },
    });
        const ids = counts.map((c) => c.courseId);
        const courses = await prisma.course.findMany({ where: { courseId: { in: ids } } });
        const map = new Map(courses.map((c) => [c.courseId, c]));
        return counts.map((c) => ({
        ...map.get(c.courseId),
        purchases: c._count._all,
    }));
};
