import { Router } from "express";
import {
    createCompanyHandler,
    getCompanyHandler,
    listCompaniesByUserHandler,
    updateCompanyHandler,
    deleteCompanyHandler,
} from "../controllers/company.controller.js";

const router = Router();

router.post("/", createCompanyHandler);
router.get("/:id", getCompanyHandler);
router.get("/user/:userId", listCompaniesByUserHandler);
router.put("/:id", updateCompanyHandler);
router.delete("/:id", deleteCompanyHandler);

export default router;