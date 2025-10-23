import {
    publishPostulation,
    applyToPostulation,
    getCandidatesByPostulation,
    listPublicPostulations,
    listCompanyPostulations,
} from "../services/company/postulationService.js";

export const listPostulations = async (req, res, next) => {
    try {
        const postulations = await listPublicPostulations();
        return res.status(200).json({
            success: true,
            data: postulations,
        });
    } catch (error) {
        next(error);
    }
};

export const listCompanyPostulationsHandler = async (req, res, next) => {
    try {
        const { companyId } = req.params;
        const postulations = await listCompanyPostulations(companyId);
        return res.status(200).json({
            success: true,
            data: postulations,
        });
    } catch (error) {
        next(error);
    }
};

export const publish = async (req, res, next) => {
    try {
        const { companyId } = req.params;
        const newPostulation = await publishPostulation(companyId, req.body);
        return res.status(201).json({
            success: true,
            message: "Oferta publicada correctamente.",
            data: newPostulation,
        });
    } catch (error) {
        next(error);
    }
};

export const apply = async (req, res, next) => {
    try {
        const { personId, postulationId } = req.params;
        const { message } = req.body;
        const application = await applyToPostulation(personId, postulationId, message);
        return res.status(201).json({
            success: true,
            message: "Postulación enviada correctamente.",
            data: application,
        });
    } catch (error) {
        next(error);
    }
};

export const getCandidates = async (req, res, next) => {
    try {
        const { postulationId } = req.params;
        const candidates = await getCandidatesByPostulation(postulationId);
        return res.status(200).json({
            success: true,
            data: candidates,
        });
    } catch (error) {
        next(error);
    }
};
