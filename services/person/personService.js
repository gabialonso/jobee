// src/modules/person/person.service.js
import prisma from "../../config/db.js";
import "express-async-errors";

const toIntOrNull = (value) => {
    if (value === null || value === undefined || value === "") {
        return null;
    }

    const parsed = parseInt(value, 10);
    return Number.isNaN(parsed) ? null : parsed;
};

const cleanRequiredText = (value) => {
    if (value === null || value === undefined) {
        return "";
    }
    return String(value).trim();
};

const cleanOptionalText = (value) => {
    if (value === null || value === undefined || value === "") {
        return null;
    }
    return String(value).trim();
};

const parseBirthday = (value) => {
    if (value === null || value === undefined || value === "") {
        return null;
    }

    if (typeof value === "string") {
        const [year] = value.split("-");
        return toIntOrNull(year);
    }

    return toIntOrNull(value);
};

export const createPerson = async (person) => {
    const userId = toIntOrNull(person?.userId);
    if (!userId) {
        throw new Error("userId es obligatorio");
    }

    const payload = {
        firstName: cleanRequiredText(person?.firstName),
        lastName: cleanRequiredText(person?.lastName),
        birthday: parseBirthday(person?.birthday ?? person?.birthYear),
        Ci: toIntOrNull(person?.Ci ?? person?.ci),
        highSchool: cleanOptionalText(person?.highSchool),
        description: cleanOptionalText(person?.description),
        cv: cleanOptionalText(person?.cv),
        linkedin: cleanOptionalText(person?.linkedin),
        profilePhoto: cleanOptionalText(person?.profilePhoto),
        bannerPhoto: cleanOptionalText(person?.bannerPhoto),
        userId,
    };

    return prisma.person.create({
        data: payload,
    });
};

export const getPersonById = async (id) => {
    return prisma.person.findUnique({ where: { id } });
};

export const listPersonsByUser = async (userId) => {
    return prisma.person.findMany({ where: { userId } });
};

export const updatePerson = async (id, data) => {
    const payload = {};

    if (data.firstName !== undefined) payload.firstName = cleanRequiredText(data.firstName);
    if (data.lastName !== undefined) payload.lastName = cleanRequiredText(data.lastName);
    if (data.highSchool !== undefined) payload.highSchool = cleanOptionalText(data.highSchool);
    if (data.description !== undefined) payload.description = cleanOptionalText(data.description);
    if (data.cv !== undefined) payload.cv = cleanOptionalText(data.cv);
    if (data.linkedin !== undefined) payload.linkedin = cleanOptionalText(data.linkedin);
    if (data.profilePhoto !== undefined) payload.profilePhoto = cleanOptionalText(data.profilePhoto);
    if (data.bannerPhoto !== undefined) payload.bannerPhoto = cleanOptionalText(data.bannerPhoto);

    if (data.birthday !== undefined || data.birthYear !== undefined) {
        payload.birthday = parseBirthday(data.birthday ?? data.birthYear);
    }

    if (data.Ci !== undefined || data.ci !== undefined) {
        payload.Ci = toIntOrNull(data.Ci ?? data.ci);
    }

    return prisma.person.update({
        where: { id },
        data: payload,
    });
};

export const deletePerson = async (id) => {
    return prisma.person.delete({ where: { id } });
};
