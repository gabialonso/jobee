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

export const adminCreateCourseHandler = async (req, res, next) => {
    try {
        const created = await adminCreateCourse(req.body);
        res.status(201).json(created);
    } catch (err) {
    next(err);
    }
};

export const adminListUsersHandler = async (req, res, next) => {
    try {
        const users = await adminListUsers(req.query.type);
        res.json(users);
    } catch (err) {
    next(err);
    }
};

export const adminPersonsTableHandler = async (_req, res, next) => {
    try {
        const rows = await adminPersonsTable();
        res.json(rows);
    } catch (err) {
    next(err);
    }
};

export const adminCompaniesTableHandler = async (_req, res, next) => {
    try {
        const rows = await adminCompaniesTable();
        res.json(rows);
    } catch (err) {
    next(err);
    }
};

export const adminCoursesTableHandler = async (_req, res, next) => {
    try {
        const rows = await adminCoursesTable();
        res.json(rows);
    } catch (err) {
    next(err);
    }
};

export const adminListPurchasesHandler = async (_req, res, next) => {
    try {
        const rows = await adminListPurchases();
        res.json(rows);
    } catch (err) {
    next(err);
    }
};

export const adminPurchasesTableHandler = async (_req, res, next) => {
    try {
        const rows = await adminPurchasesTable();
        res.json(rows);
    } catch (err) {
    next(err);
    }
};

export const adminCoursesWithPurchaseCountHandler = async (_req, res, next) => {
    try {
        const rows = await adminCoursesWithPurchaseCount();
        res.json(rows);
    } catch (err) {
        next(err);
    }
};
