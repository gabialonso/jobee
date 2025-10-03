import prisma from "../config/db.js";
import 'express-async-errors';


export const createCompany = async (company) => {
return prisma.company.create({
    data: {
            rut: company.rut,
            name: company.name,
            legalReason: company.legalReason,
            groupName: company.groupName,
            subGroupName: company.subGroupName,
            userId: company.userId, // relation by userId
        },
    });
};

export const getCompanyById = async (id) => {
    return prisma.company.findUnique({ where: { id } });
};

export const listCompaniesByUser = async (userId) => {
    return prisma.company.findMany({ where: { userId } });
};

export const updateCompany = async (id, data) => {
    return prisma.company.update({ where: { id }, data });
};

export const deleteCompany = async (id) => {
    return prisma.company.delete({ where: { id } });
};
