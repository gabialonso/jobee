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

export const createCompany = async (company) => {
    const userId = toIntOrNull(company?.userId);
    if (!userId) {
        throw new Error("userId es obligatorio");
    }

    const payload = {
        rut: cleanOptionalText(company?.rut),
        name: cleanRequiredText(company?.name),
        legalReason: cleanOptionalText(company?.legalReason),
        groupName: cleanOptionalText(company?.groupName),
        subGroupName: cleanOptionalText(company?.subGroupName),
        description: cleanOptionalText(company?.description),
        industry: cleanOptionalText(company?.industry),
        website: cleanOptionalText(company?.website),
        location: cleanOptionalText(company?.location),
        logoPhoto: cleanOptionalText(company?.logoPhoto),
        bannerPhoto: cleanOptionalText(company?.bannerPhoto),
        userId,
    };

    return prisma.company.create({
        data: payload,
    });
};

export const getCompanyById = async (id) => {
    return prisma.company.findUnique({ where: { id } });
};

export const listCompaniesByUser = async (userId) => {
    return prisma.company.findMany({ where: { userId } });
};

export const listAllCompanies = async () => {
    return prisma.company.findMany();
};

export const updateCompany = async (id, data) => {
    const payload = {};

    if (data.rut !== undefined) payload.rut = cleanOptionalText(data.rut);
    if (data.name !== undefined) payload.name = cleanRequiredText(data.name);
    if (data.legalReason !== undefined) payload.legalReason = cleanOptionalText(data.legalReason);
    if (data.groupName !== undefined) payload.groupName = cleanOptionalText(data.groupName);
    if (data.subGroupName !== undefined) payload.subGroupName = cleanOptionalText(data.subGroupName);
    if (data.description !== undefined) payload.description = cleanOptionalText(data.description);
    if (data.industry !== undefined) payload.industry = cleanOptionalText(data.industry);
    if (data.website !== undefined) payload.website = cleanOptionalText(data.website);
    if (data.location !== undefined) payload.location = cleanOptionalText(data.location);
    if (data.logoPhoto !== undefined) payload.logoPhoto = cleanOptionalText(data.logoPhoto);
    if (data.bannerPhoto !== undefined) payload.bannerPhoto = cleanOptionalText(data.bannerPhoto);

    if (data.userId !== undefined) {
        const parsedUserId = toIntOrNull(data.userId);
        if (!parsedUserId) {
            throw new Error("userId es obligatorio");
        }
        payload.userId = parsedUserId;
    }

    return prisma.company.update({ where: { id }, data: payload });
};

export const deleteCompany = async (id) => {
    return prisma.company.delete({ where: { id } });
};
