import sequelize from "../../config/sequelize.js";
import { QueryTypes } from "sequelize";


export async function publishPostulation(companyId, data) {
    try {
        const { title, description, location, area, requirements, salary } = data;

        const result = await sequelize.query(
            `
                INSERT INTO postulaciones 
                    (id_company, title, description, location, area, requirements, level, salary, currency, type, created_at)
                VALUES 
                    (:companyId, :title, :description, :location, :area, :requirements, 'PUBLICACION', NOW())
                RETURNING *;
            `,
            {
                replacements: { companyId, title, description, location, area, requirements },
                type: QueryTypes.INSERT,
            }
        );

        return result[0];
    } catch (error) {
        console.error("Error al publicar la postulación:", error);
        throw new Error("No se pudo publicar la postulación.");
    }
}

// 🔹 APLICAR A POSTULACIÓN O CURSO
export async function applyToPostulation(personId, postulationId, message, courseId) {
    try {
        // Validar que al menos uno esté presente
        if (!postulationId && !courseId) {
            throw new Error("Debes especificar una postulación o un curso.");
        }

        // Validar que no se envíen ambos al mismo tiempo
        if (postulationId && courseId) {
            throw new Error("Solo puedes aplicar a una postulación o a un curso, no ambos.");
        }

        // 🧩 Si aplica a una POSTULACIÓN
        if (postulationId) {
            const alreadyApplied = await sequelize.query(
                `
                    SELECT 1 FROM postulaciones_aplicaciones
                    WHERE id_person = :personId AND id_postulation = :postulationId
                `,
                {
                    replacements: { personId, postulationId },
                    type: QueryTypes.SELECT,
                }
            );

            if (alreadyApplied.length > 0) {
                throw new Error("Ya te has postulado a esta oferta.");
            }

            const result = await sequelize.query(
                `
                    INSERT INTO postulaciones_aplicaciones (id_person, id_postulation, message, applied_at)
                    VALUES (:personId, :postulationId, :message, NOW())
                    RETURNING *;
                `,
                {
                    replacements: { personId, postulationId, message },
                    type: QueryTypes.INSERT,
                }
            );

            return { success: true, message: "Postulación realizada correctamente.", data: result };
        }

        // 🧩 Si aplica a un CURSO
        if (courseId) {
            const alreadyAppliedCourse = await sequelize.query(
                `
                    SELECT 1 FROM cursos_aplicaciones
                    WHERE id_person = :personId AND id_course = :courseId
                `,
                {
                    replacements: { personId, courseId },
                    type: QueryTypes.SELECT,
                }
            );

            if (alreadyAppliedCourse.length > 0) {
                throw new Error("Ya te has inscrito a este curso.");
            }

            const resultCourse = await sequelize.query(
                `
                    INSERT INTO cursos_aplicaciones (id_person, id_course, message, applied_at)
                    VALUES (:personId, :courseId, :message, NOW())
                    RETURNING *;
                `,
                {
                    replacements: { personId, courseId, message },
                    type: QueryTypes.INSERT,
                }
            );

            return { success: true, message: "Inscripción al curso realizada correctamente.", data: resultCourse };
        }
    } catch (error) {
        console.error("Error en applyToPostulation:", error);
        return { success: false, message: error.message };
    }
}

// 🔹 OBTENER CANDIDATOS DE UNA POSTULACIÓN
export async function getCandidatesByPostulation(postulationId) {
    try {
        const candidates = await sequelize.query(
            `
                SELECT 
                    p.id_user,
                    p.apellido,
                    p.cedula,
                    p.institucion_educativa,
                    p.descripcion,
                    p.cv_url,
                    u.name AS user_name,
                    u.email,
                    pa.message,
                    pa.applied_at
                FROM postulaciones_aplicaciones pa
                INNER JOIN personas p ON p.id_user = pa.id_person
                INNER JOIN users u ON u.id_user = p.id_user
                WHERE pa.id_postulation = :postulationId
                ORDER BY pa.applied_at DESC
            `,
            {
                replacements: { postulationId },
                type: QueryTypes.SELECT,
            }
        );

        return candidates;
    } catch (error) {
        console.error("Error al obtener candidatos:", error);
        throw new Error("No se pudieron obtener los candidatos.");
    }
}

