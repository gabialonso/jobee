import {
        createCompany,
        getCompanyById,
        listCompaniesByUser,
        listAllCompanies,
        updateCompany,
        deleteCompany}from "../services/companyService.js";
import 'express-async-errors';

// POST /api/v1/companies - create a new company
export const createCompanyHandler = async (req, res, next) => {
    try {
        const body = req.body;
        const created = await createCompany(body);

        return res.status(201).json({
            success: true,
            message: "Company created successfully",
            data: created,
        });
    } catch (err) {
        next(err);
    }
};

// GET /api/v1/companies/:id - get a company by ID
export const getCompanyHandler = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const company = await getCompanyById(id);

        if (!company) {
            return res.status(404).json({
                success: false,
                message: "Company not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Company retrieved successfully",
            data: company,
        });
    } catch (err) {
        next(err);
    }
};

// GET /api/v1/companies/user/:userId - list companies by user
export const listCompaniesByUserHandler = async (req, res, next) => {
    try {
        const userId = Number(req.params.userId);
        const companies = await listCompaniesByUser(userId);

        return res.status(200).json({
            success: true,
            message: "Companies retrieved successfully",
            data: companies,
        });
    } catch (err) {
        next(err);
    }
};

// GET /api/v1/companies - list all companies
export const listAllCompaniesHandler = async (req, res, next) => {
    try {
        const companies = await listAllCompanies();

        return res.status(200).json({
            success: true,
            message: "Companies retrieved successfully",
            data: companies,
        });
    } catch (err) {
        next(err);
    }
};

// PUT/PATCH /api/v1/companies/:id - update a company
export const updateCompanyHandler = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const body = req.body;
        const updated = await updateCompany(id, body);

        return res.status(200).json({
            success: true,
            message: "Company updated successfully",
            data: updated,
        });
    } catch (err) {
        next(err);
    } 
};

// DELETE /api/v1/companies/:id - delete a company
export const deleteCompanyHandler = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const deleted = await deleteCompany(id);

        return res.status(200).json({
            success: true,
            message: "Company deleted successfully",
            data: deleted,
        });
    } catch (err) {
        next(err);
    }
};
