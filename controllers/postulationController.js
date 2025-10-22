import {publishPostulation,applyToPostulation,getCandidatesByPostulation} from '../services/company/postulationService.js';
export const publish = async (req,res )=> {
    try {
        const { companyId} = req.params;
        const data = req.body;
        const newPostulation = await publishPostulation(companyId, data);
        res.status(201).json({
            message: "Oferta publicada correctamente.",
            postulation: newPostulation
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const apply = async (req, res) => {
    try {
        const { personId, postulationId } = req.params;
        const { message } = req.body;
        const application = await applyToPostulation(personId, postulationId, message);
        res.status(201).json({
            message: "Postulación enviada correctamente.",
            application
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getCandidates = async (req, res) => {
    try {
        const { postulationId } = req.params;
        const candidates = await getCandidatesByPostulation(postulationId);
        res.status(200).json(candidates);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
