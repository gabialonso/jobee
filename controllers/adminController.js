// src/controllers/admin.controller.js
import {
    adminCreateCourse,
    adminListUsers,
    adminPersonsTable,
    adminCompaniesTable,
    adminCoursesTable,
    adminListPurchases,
    adminPurchasesTable,
    adminCoursesWithPurchaseCount,
} from "../src/services/admin.service.js";

// POST /api/v1/admin/courses - create course as admin
export const adminCreateCourseHandler = async (req, res, next) => {
    try {
        const created = await adminCreateCourse(req.body);

    return res.status(201).json({
            success: true,
            message: "Course created successfully (admin)",
            data: created,
        });
    } catch (err) {
        next(err);
    }
};

// GET /api/v1/admin/users - list users
export const adminListUsersHandler = async (req, res, next) => {
    try {
        const users = await adminListUsers(req.query.type);

    return res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            data: users,
        });
    } catch (err) {
        next(err);
    }
};

// GET /api/v1/admin/persons/table - persons table
export const adminPersonsTableHandler = async (_req, res, next) => {
    try {
        const rows = await adminPersonsTable();

        return res.status(200).json({
            success: true,
            message: "Persons table retrieved successfully",
            data: rows,
        });
    } catch (err) {
        next(err);
    }
};

// GET /api/v1/admin/companies/table - companies table
export const adminCompaniesTableHandler = async (_req, res, next) => {
    try {
        const rows = await adminCompaniesTable();

        return res.status(200).json({
            success: true,
            message: "Companies table retrieved successfully",
            data: rows,
        });
    } catch (err) {
        next(err);
    }
};

// GET /api/v1/admin/courses/table - courses table
export const adminCoursesTableHandler = async (_req, res, next) => {
    try {
        const rows = await adminCoursesTable();

        return res.status(200).json({
            success: true,
            message: "Courses table retrieved successfully",
            data: rows,
    });
    } catch (err) {
        next(err);
    } 
};

// GET /api/v1/admin/purchases - list purchases
export const adminListPurchasesHandler = async (_req, res, next) => {
    try {
        const rows = await adminListPurchases();

        return res.status(200).json({
            success: true,
            message: "Purchases retrieved successfully",
            data: rows,
        });
    } catch (err) {
        next(err);
    }
};

// GET /api/v1/admin/purchases/table - purchases table
export const adminPurchasesTableHandler = async (_req, res, next) => {
    try {
        const rows = await adminPurchasesTable();

        return res.status(200).json({
            success: true,
            message: "Purchases table retrieved successfully",
            data: rows,
        });
    } catch (err) {
        next(err);
    }
};

// GET /api/v1/admin/courses/purchases-count - courses with purchase count
export const adminCoursesWithPurchaseCountHandler = async (_req, res, next) => {
    try {
        const rows = await adminCoursesWithPurchaseCount();

        return res.status(200).json({
            success: true,
            message: "Courses with purchase count retrieved successfully",
            data: rows,
        });
    } catch (err) {
        next(err);
    }
};
