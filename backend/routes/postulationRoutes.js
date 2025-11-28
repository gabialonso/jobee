// routes/postulationRoutes.js
import express from "express";
import {
    apply,
    getCandidates,
    publish,
    listPostulations,
    listCompanyPostulationsHandler,
} from "../controllers/postulationController.js";

const router = express.Router();

router.get("/", listPostulations);
router.get("/company/:companyId/postulations", listCompanyPostulationsHandler);
router.post('/company/:companyId/postulations', publish);
router.post('/person/:personId/postulations/:postulationId/apply', apply);
router.get('/company/postulations/:postulationId/candidates', getCandidates);

export default router;
