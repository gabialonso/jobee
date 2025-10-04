// src/controllers/purchaseController.js
import {
        buyCourse,
        getUserPurchase,
        getAllPurchase, 
        } from "../services/purchaseService.js";

export const buyCourseHandler = async (req, res, next) => {
    try {
        const { userId, courseId, price, currency } = req.body;
        const purchase = await purchaseService.buyCourse(userId, courseId, price, currency);

        return res.status(201).json({
            success: true,
            message: "Course purchased successfully",
            data: purchase,
        });
    } catch (error) {
        next(error);
    }
};

export const getUserPurchaseHandler = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const purchase = await purchaseService.getUserPurchase(userId);

    return res.status(200).json({
            success: true,
            message: "User purchases retrieved",
            data: purchase,
        });
    } catch (error) {
        next(error);
    }
};

export const getAllPurchaseHandler = async (req, res, next) => {
    try {
        const purchase = await purchaseService.getAllPurchase();

        return res.status(200).json({
            success: true,
            message: "All purchases retrieved",
            data: purchase,
        });
    } catch (error) {
        next(error);
    }
};
