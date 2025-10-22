import {
    createCompany,
    getCompanyById,
    listCompaniesByUser,
    listAllCompanies,
    updateCompany,
    deleteCompany,
} from "../services/company/companyService.js";
import "express-async-errors";

const parseId = (value) => {
    const parsed = Number.parseInt(value, 10);
    return Number.isNaN(parsed) ? null : parsed;
};

const isNotFoundError = (err) => {
    return err?.code === "P2025";
};

const sendValidationError = (res, message) => {
    return res.status(400).json({
        success: false,
        message,
    });
};

export const createCompanyHandler = async (req, res, next) => {
    try {
        const created = await createCompany(req.body);

        return res.status(201).json({
            success: true,
            message: "Company created successfully",
            data: created,
        });
    } catch (err) {
        if (err.message === "userId es obligatorio") {
            return sendValidationError(res, err.message);
        }
        next(err);
    }
};

export const getCompanyHandler = async (req, res, next) => {
    try {
        const id = parseId(req.params.id);
        if (!id) {
            return sendValidationError(res, "Company id is invalid");
        }

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

export const listCompaniesByUserHandler = async (req, res, next) => {
    try {
        const userId = parseId(req.params.userId);
        if (!userId) {
            return sendValidationError(res, "User id is invalid");
        }

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

export const updateCompanyHandler = async (req, res, next) => {
    try {
        const id = parseId(req.params.id);
        if (!id) {
            return sendValidationError(res, "Company id is invalid");
        }

        const updated = await updateCompany(id, req.body);

        return res.status(200).json({
            success: true,
            message: "Company updated successfully",
            data: updated,
        });
    } catch (err) {
        if (err.message === "userId es obligatorio") {
            return sendValidationError(res, err.message);
        }
        if (isNotFoundError(err)) {
            return res.status(404).json({
                success: false,
                message: "Company not found",
            });
        }
        next(err);
    }
};

export const deleteCompanyHandler = async (req, res, next) => {
    try {
        const id = parseId(req.params.id);
        if (!id) {
            return sendValidationError(res, "Company id is invalid");
        }

        await deleteCompany(id);

        return res.status(200).json({
            success: true,
            message: "Company deleted successfully",
        });
    } catch (err) {
        if (isNotFoundError(err)) {
            return res.status(404).json({
                success: false,
                message: "Company not found",
            });
        }
        next(err);
    }
};
