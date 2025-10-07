// src/controllers/stripeController.js
import {
    createPaymentIntent
} from "../integration/stripeIntegration.js";

export const createPaymentIntentHandler = async (req, res, next) => {
    try {
        const { amount, currency = "usd" } = req.body;

        const paymentIntent = await createPaymentIntent(amount, currency);

        return res.status(201).json({
            success: true,
            message: "PaymentIntent created successfully",
            data: paymentIntent,
        });
    } catch (error) {
        next(error);
    }
};

export const handleWebhookHandler = async (req, res, next) => {
    try {
        const event = req.body;

        await handleWebhookEvent(event);

        return res.status(200).json({
            success: true,
            message: "Webhook received successfully",
    });
    } catch (error) {
        next(error);
    }
};
