import "express-async-errors";
import prisma from "../../config/db.js";

const toIntOrNull = (value) => {
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
    if (digitsOnly === "" || digitsOnly === "-" || digitsOnly === "+") {
        return null;
    }

    const parsed = Number.parseInt(digitsOnly, 10);
    return Number.isNaN(parsed) ? null : parsed;
};

const cleanOptionalText = (value) => {
    if (value === null || value === undefined) {
        return null;
    }

    const trimmed = String(value).trim();
    return trimmed === "" ? null : trimmed;
};

const ensureRequiredText = (value, fieldName) => {
    const cleaned = cleanOptionalText(value);
    if (!cleaned) {
        throw new Error(`${fieldName} es obligatorio`);
    }
    return cleaned;
};

const allowedJobTypes = new Set([
    "TIEMPO_COMPLETO",
    "MEDIO_TIEMPO",
    "FREELANCE",
    "PRACTICAS",
]);

const normalizeJobType = (value) => {
    if (!value && value !== 0) {
        return null;
    }

    const normalized = String(value)
        .trim()
        .toUpperCase()
        .replace(/\s+/g, "_");

    if (allowedJobTypes.has(normalized)) {
        return normalized;
    }

    // Admite valores en español más human friendly
    const aliases = {
        "TIEMPO COMPLETO": "TIEMPO_COMPLETO",
        "MEDIO TIEMPO": "MEDIO_TIEMPO",
        "PRÁCTICAS": "PRACTICAS",
        "PRACTICAS": "PRACTICAS",
    };

    const alias = aliases[normalized];
    if (alias && allowedJobTypes.has(alias)) {
        return alias;
    }

    return null;
};

const allowedStatuses = new Set(["ACTIVA", "CERRADA"]);

const normalizeStatus = (value) => {
    if (!value && value !== 0) {
        return null;
    }

    const normalized = String(value).trim().toUpperCase();
    return allowedStatuses.has(normalized) ? normalized : null;
};

export const publishPostulation = async (companyId, data = {}) => {
    const parsedCompanyId = toIntOrNull(companyId ?? data.companyId);
    if (!parsedCompanyId) {
        throw new Error("companyId es obligatorio");
    }

    const company = await prisma.company.findUnique({
        where: { id: parsedCompanyId },
    });

    if (!company) {
        throw new Error("Empresa no encontrada");
    }

    const jobType = normalizeJobType(data.jobType ?? data.job_type);
    if (!jobType) {
        throw new Error("jobType es obligatorio");
    }

    const payload = {
        title: ensureRequiredText(data.title, "title"),
        description: ensureRequiredText(data.description, "description"),
        company_name: cleanOptionalText(data.company_name) ?? company.name,
        location: ensureRequiredText(data.location, "location"),
        area: ensureRequiredText(data.area, "area"),
        requirements: ensureRequiredText(data.requirements, "requirements"),
        job_type: jobType,
        themes: cleanOptionalText(data.themes),
        companyId: parsedCompanyId,
    };

    const status = normalizeStatus(data.status);
    if (status) {
        payload.status = status;
    }

    return prisma.postulation.create({
        data: payload,
        include: {
            company: {
                select: {
                    id: true,
                    name: true,
                    logoPhoto: true,
                    location: true,
                },
            },
        },
    });
};

export const applyToPostulation = async (personId, postulationId, message) => {
    const parsedPersonId = toIntOrNull(personId);
    const parsedPostulationId = toIntOrNull(postulationId);

    if (!parsedPersonId) {
        throw new Error("personId es obligatorio");
    }
    if (!parsedPostulationId) {
        throw new Error("postulationId es obligatorio");
    }

    const [person, postulation] = await Promise.all([
        prisma.person.findUnique({
            where: { id: parsedPersonId },
            include: {
                user: {
                    select: { id: true, name: true, email: true },
                },
            },
        }),
        prisma.postulation.findUnique({
            where: { id_postulation: parsedPostulationId },
            include: {
                company: {
                    select: { id: true, name: true },
                },
            },
        }),
    ]);

    if (!person) {
        throw new Error("Persona no encontrada");
    }
    if (!postulation) {
        throw new Error("Postulación no encontrada");
    }

    const alreadyApplied = await prisma.jobApplication.findFirst({
        where: {
            personId: parsedPersonId,
            postulationId: parsedPostulationId,
        },
    });

    if (alreadyApplied) {
        throw new Error("Ya te has postulado a esta oferta.");
    }

    return prisma.jobApplication.create({
        data: {
            personId: parsedPersonId,
            postulationId: parsedPostulationId,
            message: cleanOptionalText(message),
        },
        include: {
            postulation: {
                include: {
                    company: {
                        select: { id: true, name: true },
                    },
                },
            },
            person: {
                include: {
                    user: {
                        select: { id: true, name: true, email: true },
                    },
                },
            },
        },
    });
};

export const getCandidatesByPostulation = async (postulationId) => {
    const parsedPostulationId = toIntOrNull(postulationId);

    if (!parsedPostulationId) {
        throw new Error("postulationId es inválido");
    }

    return prisma.jobApplication.findMany({
        where: { postulationId: parsedPostulationId },
        orderBy: { applied_at: "desc" },
        include: {
            postulation: {
                include: {
                    company: {
                        select: { id: true, name: true },
                    },
                },
            },
            person: {
                include: {
                    user: {
                        select: { id: true, name: true, email: true },
                    },
                },
            },
        },
    });
};

export const listPublicPostulations = async () => {
    return prisma.postulation.findMany({
        where: { status: "ACTIVA" },
        orderBy: { posted_at: "desc" },
        include: {
            company: {
                select: { id: true, name: true, logoPhoto: true, location: true },
            },
            applications: {
                select: {
                    id_application: true,
                },
            },
        },
    });
};

export const listCompanyPostulations = async (companyId) => {
    const parsedCompanyId = toIntOrNull(companyId);

    if (!parsedCompanyId) {
        throw new Error("companyId es inválido");
    }

    return prisma.postulation.findMany({
        where: { companyId: parsedCompanyId },
        orderBy: { posted_at: "desc" },
        include: {
            company: {
                select: { id: true, name: true },
            },
            applications: {
                orderBy: { applied_at: "desc" },
                include: {
                    person: {
                        include: {
                            user: {
                                select: { id: true, name: true, email: true },
                            },
                        },
                    },
                },
            },
        },
    });
};

export const listCompanyApplications = async ({ companyId } = {}) => {
    const where = {};

    if (companyId !== undefined) {
        const parsedCompanyId = toIntOrNull(companyId);
        if (!parsedCompanyId) {
            throw new Error("companyId es inválido");
        }
        where.postulation = { companyId: parsedCompanyId };
    }

    const applications = await prisma.jobApplication.findMany({
        where,
        orderBy: { applied_at: "desc" },
        include: {
            postulation: {
                include: {
                    company: {
                        select: {
                            id: true,
                            name: true,
                            location: true,
                            logoPhoto: true,
                        },
                    },
                },
            },
            person: {
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                        },
                    },
                },
            },
        },
    });

    return applications.map((application) => ({
        id: application.id_application,
        appliedAt: application.applied_at,
        message: application.message,
        postulation: application.postulation
            ? {
                  id: application.postulation.id_postulation,
                  title: application.postulation.title,
                  area: application.postulation.area,
                  location: application.postulation.location,
                  status: application.postulation.status,
              }
            : null,
        company: application.postulation?.company
            ? {
                  id: application.postulation.company.id,
                  name: application.postulation.company.name,
                  location: application.postulation.company.location,
                  logoPhoto: application.postulation.company.logoPhoto,
              }
            : null,
        candidate: application.person
            ? {
                  id: application.person.id,
                  firstName: application.person.firstName,
                  lastName: application.person.lastName,
                  highSchool: application.person.highSchool,
                  description: application.person.description,
                  cv: application.person.cv,
                  linkedin: application.person.linkedin,
                  profilePhoto: application.person.profilePhoto,
                  user: application.person.user
                      ? {
                            id: application.person.user.id,
                            name: application.person.user.name,
                            email: application.person.user.email,
                        }
                      : null,
              }
            : null,
    }));
};
