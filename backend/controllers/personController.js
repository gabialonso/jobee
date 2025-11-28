import {
    createPerson,
    getPersonById,
    listPersonsByUser,
    updatePerson,
    deletePerson,
} from "../services/person/personService.js";
import "express-async-errors";

const parseId = (value) => {
    if (value === null || value === undefined) {
        return null;
    }

    if (typeof value === "number" && Number.isFinite(value)) {
        return Math.trunc(value);
    }

    const normalized = String(value).trim();
    if (normalized === "") {
        return null;
    }

    const digitsOnly = normalized.replace(/[^\d-]+/g, "");
    if (!digitsOnly || digitsOnly === "-" || digitsOnly === "+") {
        return null;
    }

    const parsed = Number.parseInt(digitsOnly, 10);
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

export const createPersonHandler = async (req, res, next) => {
    try {
        const created = await createPerson(req.body);

        return res.status(201).json({
            success: true,
            message: "Person created successfully",
            data: created,
        });
    } catch (err) {
        if (err.message === "userId es obligatorio") {
            return sendValidationError(res, err.message);
        }
        next(err);
    }
};

export const getPersonByIdHandler = async (req, res, next) => {
    try {
        const id = parseId(req.params.id);
        if (!id) {
            return sendValidationError(res, "Person id is invalid");
        }

        const person = await getPersonById(id);

        if (!person) {
            return res.status(404).json({
                success: false,
                message: "Person not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Person retrieved successfully",
            data: person,
        });
    } catch (err) {
        next(err);
    }
};

export const listPersonsByUserHandler = async (req, res, next) => {
    try {
        const userId = parseId(req.params.userId);
        if (!userId) {
            return sendValidationError(res, "User id is invalid");
        }

        const persons = await listPersonsByUser(userId);

        return res.status(200).json({
            success: true,
            message: "Persons retrieved successfully",
            data: persons,
        });
    } catch (err) {
        next(err);
    }
};

export const updatePersonHandler = async (req, res, next) => {
    try {
        const id = parseId(req.params.id);
        if (!id) {
            return sendValidationError(res, "Person id is invalid");
        }

        const updated = await updatePerson(id, req.body);

        return res.status(200).json({
            success: true,
            message: "Person updated successfully",
            data: updated,
        });
    } catch (err) {
        if (isNotFoundError(err)) {
            return res.status(404).json({
                success: false,
                message: "Person not found",
            });
        }
        next(err);
    }
};

export const deletePersonHandler = async (req, res, next) => {
    try {
        const id = parseId(req.params.id);
        if (!id) {
            return sendValidationError(res, "Person id is invalid");
        }

        await deletePerson(id);

        return res.status(200).json({
            success: true,
            message: "Person deleted successfully",
        });
    } catch (err) {
        if (isNotFoundError(err)) {
            return res.status(404).json({
                success: false,
                message: "Person not found",
            });
        }
        next(err);
    }
};
