import { Router } from "express";
import {
    createCompanyHandler,
    getCompanyHandler,
    listCompaniesByUserHandler,
    listAllCompaniesHandler,
    updateCompanyHandler,
    deleteCompanyHandler,
    listCompanyCandidatesHandler,
    listCompanyCandidatesByQueryHandler,
} from "../controllers/companyController.js";


const router = Router();

router.post("/", createCompanyHandler);
router.get("/", listAllCompaniesHandler);
router.get("/user/:userId", listCompaniesByUserHandler);
router.get("/users", listCompanyCandidatesByQueryHandler);
router.get("/:companyId/candidates", listCompanyCandidatesHandler);
router.get("/:id", getCompanyHandler);
router.put("/:id", updateCompanyHandler);
router.delete("/:id", deleteCompanyHandler);

export default router;
