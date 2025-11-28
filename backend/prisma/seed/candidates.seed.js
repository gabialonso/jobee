import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const companies = [
    {
        key: "tech-hive",
        user: {
            name: "Tech Hive HR",
            email: "hr@techhive.demo",
            password: "Demo1234!",
            role: "companies",
        },
        company: {
            rut: "SEED-RUT-100",
            name: "Tech Hive",
            legalReason: "Tech Hive SRL",
            groupName: "Tecnología",
            subGroupName: "Software",
            description: "Startup enfocada en soluciones web para pymes.",
            industry: "Software",
            website: "https://techhive.example",
            location: "Montevideo, UY",
            logoPhoto: null,
            bannerPhoto: null,
        },
    },
    {
        key: "green-future",
        user: {
            name: "Green Future HR",
            email: "hr@greenfuture.demo",
            password: "Demo1234!",
            role: "companies",
        },
        company: {
            rut: "SEED-RUT-200",
            name: "Green Future",
            legalReason: "Green Future SA",
            groupName: "Sustentabilidad",
            subGroupName: "Energías renovables",
            description: "Consultora joven que impulsa proyectos sustentables.",
            industry: "Energía",
            website: "https://greenfuture.example",
            location: "Punta del Este, UY",
            logoPhoto: null,
            bannerPhoto: null,
        },
    },
];

const candidates = [
    {
        key: "alice",
        user: {
            name: "Alice Romero",
            email: "alice.romero@demo.com",
            password: "Demo1234!",
            role: "persons",
        },
        person: {
            firstName: "Alice",
            lastName: "Romero",
            birthday: 1999,
            Ci: 48912345,
            highSchool: "UTU Informática",
            description: "Estudiante de desarrollo frontend apasionada por UX/UI.",
            cv: "https://demo.jobee/files/cv/alice-romero.pdf",
            linkedin: "https://www.linkedin.com/in/aliceromero",
            profilePhoto: null,
            bannerPhoto: null,
        },
    },
    {
        key: "bruno",
        user: {
            name: "Bruno Cabrera",
            email: "bruno.cabrera@demo.com",
            password: "Demo1234!",
            role: "persons",
        },
        person: {
            firstName: "Bruno",
            lastName: "Cabrera",
            birthday: 1998,
            Ci: 50233456,
            highSchool: "Liceo Técnico #5",
            description: "Técnico en soporte con foco en satisfacción de usuarios.",
            cv: "https://demo.jobee/files/cv/bruno-cabrera.pdf",
            linkedin: "https://www.linkedin.com/in/brunocabrera",
            profilePhoto: null,
            bannerPhoto: null,
        },
    },
];

const postulations = [
    {
        key: "frontend-jr",
        companyKey: "tech-hive",
        title: "Desarrollador/a Frontend Junior",
        description:
            "Buscamos estudiantes o egresados recientes con ganas de crear interfaces web accesibles y bien diseñadas.",
        location: "Remoto · Montevideo, UY",
        area: "Desarrollo",
        requirements:
            "Conocimientos básicos de HTML, CSS y JavaScript. Se valora experiencia con frameworks modernos.",
        jobType: "TIEMPO_COMPLETO",
        themes: "Frontend,JavaScript,UX",
    },
    {
        key: "support-trainee",
        companyKey: "green-future",
        title: "Trainee de Soporte Técnico",
        description:
            "Te sumarás al equipo de soporte para acompañar la implementación de proyectos de eficiencia energética.",
        location: "Híbrido · Maldonado, UY",
        area: "Soporte",
        requirements:
            "Bases de redes y sistemas operativos. Excelente comunicación y ganas de aprender.",
        jobType: "MEDIO_TIEMPO",
        themes: "Customer Success,Help Desk",
    },
];

const applications = [
    {
        postulationKey: "frontend-jr",
        candidateKey: "alice",
        message:
            "¡Hola! Me interesa la vacante de Frontend, actualmente curso tercer año de Desarrollo Web.",
    },
    {
        postulationKey: "support-trainee",
        candidateKey: "bruno",
        message:
            "Tengo experiencia ayudando en el laboratorio de mi liceo y me gustaría seguir creciendo en soporte.",
    },
];

const hashPassword = async (plain) => bcrypt.hash(plain, 10);

const ensureUser = async ({ name, email, password, role }) => {
    const hashed = await hashPassword(password);
    return prisma.user.upsert({
        where: { email },
        update: { name, password: hashed, role },
        create: { name, email, password: hashed, role },
    });
};

const ensureCompany = async (userId, companyData) => {
    const existing = await prisma.company.findFirst({ where: { userId } });

    if (existing) {
        return prisma.company.update({
            where: { id: existing.id },
            data: {
                ...companyData,
                userId,
            },
        });
    }

    return prisma.company.create({
        data: {
            ...companyData,
            userId,
        },
    });
};

const ensurePerson = async (userId, personData) => {
    const existing = await prisma.person.findFirst({ where: { userId } });

    if (existing) {
        return prisma.person.update({
            where: { id: existing.id },
            data: {
                ...personData,
                userId,
            },
        });
    }

    return prisma.person.create({
        data: {
            ...personData,
            userId,
        },
    });
};

const seed = async () => {
    const companyRecords = {};

    for (const companyItem of companies) {
        const user = await ensureUser(companyItem.user);
        const company = await ensureCompany(user.id, companyItem.company);
        companyRecords[companyItem.key] = { user, company };
    }

    const candidateRecords = {};
    for (const candidateItem of candidates) {
        const user = await ensureUser(candidateItem.user);
        const person = await ensurePerson(user.id, candidateItem.person);
        candidateRecords[candidateItem.key] = { user, person };
    }

    const postulationRecords = {};
    for (const postulationItem of postulations) {
        const { company } = companyRecords[postulationItem.companyKey];

        await prisma.jobApplication.deleteMany({
            where: {
                postulation: {
                    companyId: company.id,
                    title: postulationItem.title,
                },
            },
        });

        await prisma.postulation.deleteMany({
            where: {
                companyId: company.id,
                title: postulationItem.title,
            },
        });

        const postulation = await prisma.postulation.create({
            data: {
                title: postulationItem.title,
                description: postulationItem.description,
                company_name: company.name,
                location: postulationItem.location,
                area: postulationItem.area,
                requirements: postulationItem.requirements,
                job_type: postulationItem.jobType,
                themes: postulationItem.themes,
                status: "ACTIVA",
                companyId: company.id,
            },
        });

        postulationRecords[postulationItem.key] = postulation;
    }

    for (const applicationItem of applications) {
        const postulation = postulationRecords[applicationItem.postulationKey];
        const { person } = candidateRecords[applicationItem.candidateKey];

        await prisma.jobApplication.deleteMany({
            where: {
                postulationId: postulation.id_postulation,
                personId: person.id,
            },
        });

        await prisma.jobApplication.create({
            data: {
                postulationId: postulation.id_postulation,
                personId: person.id,
                message: applicationItem.message,
            },
        });
    }

    return {
        companies: Object.keys(companyRecords).length,
        candidates: Object.keys(candidateRecords).length,
        postulations: Object.keys(postulationRecords).length,
        applications: applications.length,
    };
};

const main = async () => {
    try {
        const summary = await seed();
        console.log("Seed de candidatos completado:", summary);
    } catch (error) {
        console.error("Error ejecutando el seed de candidatos:", error);
        process.exitCode = 1;
    } finally {
        await prisma.$disconnect();
    }
};

main();
