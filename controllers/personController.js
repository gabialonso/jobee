import {createPerson, 
        getPersonById,
        listPersonsByUser,
        updatePerson,
        deletePerson } from "../service/personService"
        
import 'express-async-errors';

export const createPersonHandler = async (req, res, next) => {
    try {
        const body = req.body;
        const created = await createPerson(body);

        return res.status(201).json({
            success: true,
            message: "Person created successfully",
            data: created,
        });
    } catch (err) {
    next(err);
    }

};

export const getPersonByIdHandler = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
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
        const userId = Number(req.params.userId);
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
        const id = Number(req.params.id);
        const body = req.body;
        const updated = await updatePerson(id, body);

        return res.status(200).json({
            success: true,
            message: "Person updated successfully",
            data: updated,
        });
    } catch (err) {
    next(err);
    }
};

export const deletePersonHandler = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const deleted = await deletePerson(id);

        return res.status(200).json({
            success: true,
            message: "Person deleted successfully",
            data: deleted,
        });
    } catch (err) {
        next(err);
    }
};