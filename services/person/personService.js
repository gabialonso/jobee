// src/modules/person/person.service.js
import prisma from "../../config/db.js";
import 'express-async-errors';


export const createPerson = async (person) => {
    return prisma.person.create({
        data: {
            firstName:   person.firstName,
            lastName:    person.lastName,
            birthYear:   person.birthYear,
            highSchool:  person.highSchool,
            description: person.description,
            cv:          person.cv ?? null, 
            userId:      person.userId,     
        },
    });
};

export const getPersonById = async (id) => {
    return prisma.person.findUnique({ where: { id } });
};

export const listPersonsByUser = async (userId) => {
    return prisma.person.findMany({ where: { userId } });
};

export const updatePerson = async (id, data) => {
    return prisma.person.update({
        where: { id },
        data: {
            firstName:   data.firstName,
            lastName:    data.lastName,
            birthYear:   data.birthYear,
            highSchool:  data.highSchool,
            description: data.description,
            cv:          data.cv,
        },
    });
};

export const deletePerson = async (id) => {
    return prisma.person.delete({ where: { id } });
};
