import {
  createCompany,
  getCompanyById,
  listCompaniesByUser,
  updateCompany,
  deleteCompany,
} from "../services/company.service.js";

export const createCompanyHandler = async (req, res, next) => {
    try {
    const body = req.body;
    const created = await createCompany(body);
    res.status(201).json(created);
    } catch (err) {
    next(err);
    }
};

export const getCompanyHandler = async (req, res, next) => {
    try {
    const id = Number(req.params.id);
    const company = await getCompanyById(id);
    if (!company) return res.status(404).json({ error: "Company not found" });
    res.json(company);
    } catch (err) {
    next(err);
    }
};

export const listCompaniesByUserHandler = async (req, res, next) => {
    try {
    const userId = Number(req.params.userId);
    const companies = await listCompaniesByUser(userId);
    res.json(companies);
    } catch (err) {
    next(err);
    }
};

export const updateCompanyHandler = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const body = req.body;
        const updated = await updateCompany(id, body);
    res.json(updated);
    } catch (err) {
        next(err);
    }
};

export const deleteCompanyHandler = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const deleted = await deleteCompany(id);
        res.json(deleted);
    } catch (err) {
        next(err);
    }
};
