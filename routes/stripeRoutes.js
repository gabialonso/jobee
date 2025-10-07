import express from "express";
import { createPaymentIntentHandler } from "../controllers/stripeController.js";

const router = express.Router();

router.post("/create-payment-intent", createPaymentIntentHandler);

export default router;
