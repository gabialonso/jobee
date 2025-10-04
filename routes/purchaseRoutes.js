// src/routes/purchase.routes.js
import { Router } from "express";
import {
    buyCourseHandler,
    getUserPurchaseHandler,
    getAllPurchaseHandler,
} from "../controllers/purchaseController.js";

const router = Router();

router.post("/", buyCourseHandler);
router.get("/user/:userId", getUserPurchaseHandler);
router.get("/", getAllPurchaseHandler);

export default router;
