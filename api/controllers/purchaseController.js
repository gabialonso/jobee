// src/controllers/purchaseController.js
import {
        buyCourse,
        getUserPurchase,
        getAllPurchase, 
        } from "../services/course/purchaseService.js";

export const buyCourseHandler = async (req, res, next) => {
    try {
        const { userId, courseId, price, currency } = req.body;
        const purchase = await buyCourse(userId, courseId, price, currency);

        return res.status(201).json({
            success: true,
            message: "Course purchased successfully",
            data: purchase,
        });
    } catch (error) {
        if (error?.message === "Course not found") {
            return res.status(404).json({
                success: false,
                message: "Course not found",
            });
        }

        if (error?.message === "Course already purchased by this user") {
            return res.status(409).json({
                success: false,
                message: "Course already purchased by this user",
            });
        }

        next(error);
    }
};

export const getUserPurchaseHandler = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const purchase = await getUserPurchase(userId);

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
        const purchase = await getAllPurchase();

        return res.status(200).json({
            success: true,
            message: "All purchases retrieved",
            data: purchase,
        });
    } catch (error) {
        next(error);
    }
};
