// src/routes/purchase.routes.js
import { Router } from "express";
import {
    buyCourseHandler,
    getUserPurchasesHandler,
    getAllPurchasesHandler,
} from "../controllers/purchase.controller.js";

const router = Router();

router.post("/", buyCourseHandler);
router.get("/user/:userId", getUserPurchasesHandler);
router.get("/", getAllPurchasesHandler);

export default router;
