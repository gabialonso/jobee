import {
    createPerson,
    getPersonById,
    listPersonsByUser,
    updatePerson,
    deletePerson,
} from "../src/services/person.service.js";

export const createPersonHandler = async (req, res, next) => {
    try {
        const body = req.body;
        const created = await createPerson(body);
        res.status(201).json(created);
    } catch (err) {
        next(err);
    }
};

export const getPersonHandler = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const person = await getPersonById(id);
        if (!person) return res.status(404).json({ error: "Person not found" });
        res.json(person);
    } catch (err) {
        next(err);
    }
};

export const listPersonsByUserHandler = async (req, res, next) => {
    try {
        const userId = Number(req.params.userId);
        const persons = await listPersonsByUser(userId);
        res.json(persons);
    } catch (err) {
        next(err);
    }
};

export const updatePersonHandler = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const body = req.body;
        const updated = await updatePerson(id, body);
        res.json(updated);
    } catch (err) {
        next(err);
    }
};

export const deletePersonHandler = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const deleted = await deletePerson(id);
        res.json(deleted);
    } catch (err) {
        next(err);
    }
};
